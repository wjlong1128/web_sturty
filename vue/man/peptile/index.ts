import puppeteer from "puppeteer";

function wait5S() {
  return new Promise((reso) => {
    setTimeout(reso, 5000);
  });
}
(async () => {
  const borwser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  
  const page = await borwser.newPage();
  await page.goto("https://jd.com");

  await page.focus("#key");
  await page.keyboard.sendCharacter("iphone");
  await page.click(".button");
  // 等待加载完毕
  await page.waitForSelector(".gl-item");
  let isScroll = true;
  let steep = 500;
  while (isScroll) {
    await page.evaluate((steep) => {
      let scrollTop = document.scrollingElement!.scrollTop ?? 0;
      document.scrollingElement!.scrollTop = scrollTop + steep;
      return document.body.clientHeight > scrollTop + 1080 ? true : false;
    }, steep);

    await wait5S();
  }

  await page.screenshot({ path: "jd-iphone.png", fullPage: true });
})();
