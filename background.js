chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: "DECODE AND GO",
    contexts: ["link"],
    id: "tom-decode-id",
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  const url = new URL(info.linkUrl);
  const params = new URLSearchParams(url.search);

  const encodedUrl = params.get("url");
  if (!url) {
    alert("No URL found in params");
  }
  const decodedUrl = atob(encodedUrl);

  chrome.tabs.create({
    url: decodedUrl,
    active: false,
  });
});
