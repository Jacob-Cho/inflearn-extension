const getStorage = () =>
  new Promise((resolve) => {
    chrome.storage.local.get(null, resolve);
  });

const setStorage = (param) => {
  return new Promise((resolve) => {
    chrome.storage.local.set(param, resolve);
  });
};
