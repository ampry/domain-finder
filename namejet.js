// import fetch from "node-fetch";
// import fs from "fs";

// const url = "https://www.namejet.com/file_dl.sn?file=preorderstarting1.csv";

// async function fetchAndSaveNameJetCSV() {
//   try {
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
//         Referer: "https://www.namejet.com/",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const csvData = await response.text();

//     fs.writeFileSync("namejet_data.csv", csvData, "utf-8");
//     console.log("CSV data saved to namejet_data.csv");
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }

// fetchAndSaveNameJetCSV();

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
