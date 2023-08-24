// import puppeteer from "puppeteer";

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// const namejet = async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//   });
//   const page = await browser.newPage();
//   const client = await page.target().createCDPSession();
//   await client.send("Page.setDownloadBehavior", {
//     behavior: "allow",
//     downloadPath: "csv",
//   });

//   try {
//     await page.goto("https://www.namejet.com/download.action?format=csv", {
//       waitUntil: "networkidle0",
//     });

//     sleep(5000);

//     const downloadButton =
//       "#list-subscribe > div:nth-child(1) > div > div:nth-child(2) > p > a:nth-child(1)";

//     // await page.waitForSelector(downloadButton);
//     await sleep(2000);
//     await page.click(downloadButton);
//     await sleep(2000);
//     console.log("Download button clicked");

//     await sleep(10000);

//     console.log("File downloaded successfully");
//   } catch (error) {
//     console.error("Error:", error);
//   } finally {
//     await browser.close();
//   }
// };

// export default namejet;

import fetch from "node-fetch";
import fs from "fs";
import path from "path";

const namejet = async () => {
  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);
  const csvDirectory = path.join(__dirname, "csv");
  const csvFilePath = path.join(csvDirectory, "data.csv");

  if (!fs.existsSync(csvDirectory)) {
    fs.mkdirSync(csvDirectory);
  }

  const headers = {
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": '"Not)A;Brand";v="24", "Chromium";v="116"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    cookie:
      "a4Fr2gfKvFm2cxhT7lLo5Q__=v1mgsGg6+jRJS; OptanonAlertBoxClosed=2023-07-03T20:32:23.568Z; __cfruid=ba311d7f6f91abfb14e5898aa1532d19d7bf83a3-1692907082; check=true; AMCVS_A8B5776A5245B4360A490D44%40AdobeOrg=1; at_check=true; JSESSIONID=22B6DCD5ED216628E178EA0EE4BD1215; __cf_bm=ul8UNqHH8zNpDSbY742lzKCuP.hYsaEcXQPeazhaGvE-1692913033-0-Af2xG/88TussFDWvf62t4+SgduGhaMshJWvMpgmEiRCarWSXlO4BfVkJH2O/pgHyKIF7eenyBkuPQ4YIsIVhQKg=; cf_clearance=nuTzaHuXhB7BVFB8RoQE8RO8HbxbdQeGeXtTg5Od0fU-1692913810-0-1-94179267.23ba2c8c.c316cd87-0.2.1692913810; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Aug+24+2023+15%3A50%3A14+GMT-0600+(Mountain+Daylight+Time)&version=202307.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=98b03369-efdc-4e7f-b14e-dad98ec846dc&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A0&geolocation=US%3BUT&AwaitingReconsent=false; AMCV_A8B5776A5245B4360A490D44%40AdobeOrg=179643557%7CMCIDTS%7C19594%7CMCMID%7C17304368905986024951118132469506996602%7CMCOPTOUT-1692921014s%7CNONE%7CvVersion%7C5.5.0; mbox=PC#57a16877058a445894f10dbfe02b2076.34_0#1756158615|session#db7f918ad48a464c9b01ed02ca06db51#1692915675; s_ppn=namejet.com/download.action",
    Referer: "https://www.namejet.com/download.action?format=csv",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  };

  fetch("https://www.namejet.com/file_dl.sn?file=preorderstarting1.csv", {
    headers,
    method: "GET",
  })
    .then((response) => response.text())
    .then((data) => {
      fs.writeFileSync(csvFilePath, data, "utf-8");
      console.log("CSV file saved successfully.");
    })
    .catch((error) => {
      console.error("Error fetching or saving the CSV file:", error);
    });
};

export default namejet;
