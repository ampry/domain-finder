import puppeteer from "puppeteer";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const namejet = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
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

    sleep(5000);

    const downloadButton =
      "#list-subscribe > div:nth-child(1) > div > div:nth-child(2) > p > a:nth-child(1)";

    const xpath = '//*[@id="list-subscribe"]/div[1]/div/div[2]/p/a[1]';
    // await page.waitForSelector(downloadButton);
    // await sleep(2000);
    // await page.click(downloadButton);
    // await sleep(2000);
    // console.log("Download button clicked");

    // await sleep(10000);

    await page.evaluate((xpath) => {
      const element = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      if (element) {
        element.click();
      }
    }, xpath);

    await sleep(5000);

    console.log("File downloaded successfully");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await browser.close();
  }
};

export default namejet;

// import { firefox } from "playwright";

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// (async () => {
//   // Launch a new browser instance using Firefox
//   const browser = await firefox.launch({
//     headless: false,
//   });

//   // Create a new browser context
//   const context = await browser.newContext();

//   // Create a new page in the context
//   const page = await context.newPage();

//   // Navigate to a URL
//   await page.goto("https://www.namejet.com/download.action?format=csv");
//   sleep(2000);
//   await page.click('//*[@id="list-subscribe"]/div[1]/div/div[2]/p/a[1]');
//   sleep(5000);
//   // Close the browser
//   await browser.close();
// })();
