$(() => {
  setInterval(async () => {
    const storage = await getStorage();
    const { power } = storage;

    if (power) {
      const nextButtonSpan = $(
        "#NextUnitModal-body span:contains('다음 수업')"
      );
      if (nextButtonSpan.length) {
        nextButtonSpan[0].click();
        const chapter = $("#NextUnitModal-body > div > p").text();
        console.log(`[Inflearn Extenstions] Click ${chapter}`);
      }
    }
  }, 1000);
});
