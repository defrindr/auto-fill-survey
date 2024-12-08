document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get(["fillMode"], (data) => {
    const mode = data.fillMode || "random"; // Default ke "random"
    fillSurvey(mode);
  });

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
          const randomIndex = Math.floor(Math.random() * radios.length);
          radios[randomIndex].checked = true;
        } else if (mode === "last") {
          radios[radios.length - 1].checked = true;
        }
      }
    });

    console.log(`Radio buttons have been auto-filled with mode: ${mode}`);
  }
});
