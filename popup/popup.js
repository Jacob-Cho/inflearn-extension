$(() => {
  chrome.storage.local.get(["power"]).then(({ power }) => {
    $("#power").prop("checked", power);
  });

  $("#power").change(({ target: { checked } }) => {
    chrome.storage.local.set({ power: checked });
  });
});
