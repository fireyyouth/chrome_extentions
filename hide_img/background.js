// Called when the user clicks on the browser action.

let hidden = false;

function make_js() {
  let visibility = hidden ? 'visible' : 'hidden';
  return `Array.from(document.getElementsByTagName('img')).forEach(function (img) {img.style = 'visibility: ${visibility};';});`;
}

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: make_js()
  });
  hidden = !hidden;
});