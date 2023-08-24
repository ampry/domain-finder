import puppeteer from "puppeteer";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const client = await page.target().createCDPSession();
  await client.send("Page.setDownloadBehavior", {
    behavior: "allow",
    downloadPath: "csv",
  });

  try {
    await page.goto("https://www.namejet.com/download.action?format=csv", {
      waitUntil: "networkidle0",
    });

    const downloadButton =
      "#list-subscribe > div:nth-child(1) > div > div:nth-child(2) > p > a:nth-child(1)";

    // await page.waitForSelector(downloadButton);
    await sleep(2000);
    await page.click(downloadButton);
    await sleep(2000);
    console.log("Download button clicked");

    await sleep(5000);

    console.log("File downloaded successfully");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await browser.close();
  }
})();
