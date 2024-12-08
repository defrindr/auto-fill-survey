chrome.runtime.onInstalled.addListener(() => {
  console.log("Auto Fill Survey Extension installed");
});

// Listener untuk menerima pesan atau instruksi
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getMode") {
    chrome.storage.sync.get(["fillMode"], (data) => {
      sendResponse({ mode: data.fillMode || "random" });
    });
    return true; // Menandakan respon akan dikirim secara asinkron
  }
});
