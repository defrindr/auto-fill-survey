document.addEventListener("DOMContentLoaded", async () => {
  const modeInputs = document.querySelectorAll('input[name="fill-mode"]');
  const saveButton = document.getElementById("save-settings");
  const fillButton = document.getElementById("fill-survey");

  // Ambil pengaturan mode yang disimpan
  chrome.storage.sync.get(["fillMode"], (data) => {
    const mode = data.fillMode || "random"; // Default "random"
    modeInputs.forEach((input) => {
      input.checked = input.value === mode;
    });
  });

  // Simpan mode yang dipilih
  saveButton.addEventListener("click", () => {
    const selectedMode =
      [...modeInputs].find((input) => input.checked)?.value || "random";
    chrome.storage.sync.set({ fillMode: selectedMode }, () => {
      alert("Settings saved!");
    });
  });

  // Jalankan pengisian otomatis sesuai mode
  fillButton.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    chrome.storage.sync.get(["fillMode"], (data) => {
      const mode = data.fillMode || "random";
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: fillSurvey,
        args: [mode],
      });
    });
  });

  // Fungsi pengisian otomatis
  function fillSurvey(mode) {
    const radioGroups = [
      ...new Set(
        [...document.querySelectorAll('input[type="radio"]')].map(
          (rb) => rb.name
        )
      ),
    ];

    radioGroups.forEach((group) => {
      const radios = document.querySelectorAll(`input[name="${group}"]`);
      if (radios.length > 0) {
        if (mode === "random") {
          // Pilih nilai secara acak
          const randomIndex = Math.floor(Math.random() * radios.length);
          radios[randomIndex].checked = true;
        } else if (mode === "last") {
          // Pilih nilai terakhir
          radios[radios.length - 1].checked = true;
        }
      }
    });

    console.log(`Radio buttons have been auto-filled with mode: ${mode}`);
  }
});
