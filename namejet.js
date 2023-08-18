// fetch("https://www.namejet.com/file_dl.sn?file=preorderstarting1.csv", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
//     "accept-language": "en-US,en;q=0.9",
//     "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "document",
//     "sec-fetch-mode": "navigate",
//     "sec-fetch-site": "same-origin",
//     "sec-fetch-user": "?1",
//     "upgrade-insecure-requests": "1",
//     "cookie": "a4Fr2gfKvFm2cxhT7lLo5Q__=v1mgsGg6+jRJS; OptanonAlertBoxClosed=2023-07-03T20:32:23.568Z; JSESSIONID=00B567C1C229A25E3FEB160C68200B34; __cf_bm=ZLswO9M5wJ3TgNGMbZdeoxsAx4vUhyV4bjeBQ9uiCJA-1692372780-0-AQtFkTFgnkk84CW5LIIieIrnWz2BQjXNdS7v3o4aPlMOgKerMyV6+oviXykLvNjYBVOhMim3SJXdi2FeDuPrXi0=; __cfruid=9122f143d6c6abac81cd91c17d1d9bdfb2c70609-1692372780; at_check=true; AMCVS_A8B5776A5245B4360A490D44%40AdobeOrg=1; cf_clearance=dBw682JdB9HeieO5rTijLh_wSfLaf9jwEMr.mmAfMN4-1692372781-0-1-94179267.15dd186c.c316cd87-0.2.1692372781; AMCV_A8B5776A5245B4360A490D44%40AdobeOrg=179643557%7CMCIDTS%7C19588%7CMCMID%7C17304368905986024951118132469506996602%7CMCOPTOUT-1692379996s%7CNONE%7CvVersion%7C5.5.0; mbox=PC#57a16877058a445894f10dbfe02b2076.34_0#1755617597|session#991e6e4906254ea8967a2f064364d397#1692374657; OptanonConsent=isGpcEnabled=0&datestamp=Fri+Aug+18+2023+09%3A33%3A16+GMT-0600+(Mountain+Daylight+Time)&version=202307.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=98b03369-efdc-4e7f-b14e-dad98ec846dc&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A0&geolocation=US%3BUT&AwaitingReconsent=false; s_ppn=namejet.com/download.action",
//     "Referer": "https://www.namejet.com/download.action?format=csv",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": null,
//   "method": "GET"
// });

// import fetch from "node-fetch";
// import fs from "fs";

// const url = "https://www.namejet.com/file_dl.sn?file=preorderstarting1.csv";

// const headers = {
//   accept:
//     "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
//   "accept-language": "en-US,en;q=0.9",
//   "sec-ch-ua": '"Not)A;Brand";v="24", "Chromium";v="116"',
//   "sec-ch-ua-mobile": "?0",
//   "sec-ch-ua-platform": '"macOS"',
//   "sec-fetch-dest": "document",
//   "sec-fetch-mode": "navigate",
//   "sec-fetch-site": "same-origin",
//   "sec-fetch-user": "?1",
//   "upgrade-insecure-requests": "1",
//   cookie:
//     "a4Fr2gfKvFm2cxhT7lLo5Q__=v1mgsGg6+jRJS; OptanonAlertBoxClosed=2023-07-03T20:32:23.568Z; JSESSIONID=00B567C1C229A25E3FEB160C68200B34; __cf_bm=ZLswO9M5wJ3TgNGMbZdeoxsAx4vUhyV4bjeBQ9uiCJA-1692372780-0-AQtFkTFgnkk84CW5LIIieIrnWz2BQjXNdS7v3o4aPlMOgKerMyV6+oviXykLvNjYBVOhMim3SJXdi2FeDuPrXi0=; __cfruid=9122f143d6c6abac81cd91c17d1d9bdfb2c70609-1692372780; at_check=true; AMCVS_A8B5776A5245B4360A490D44%40AdobeOrg=1; cf_clearance=dBw682JdB9HeieO5rTijLh_wSfLaf9jwEMr.mmAfMN4-1692372781-0-1-94179267.15dd186c.c316cd87-0.2.1692372781; AMCV_A8B5776A5245B4360A490D44%40AdobeOrg=179643557%7CMCIDTS%7C19588%7CMCMID%7C17304368905986024951118132469506996602%7CMCOPTOUT-1692379996s%7CNONE%7CvVersion%7C5.5.0; mbox=PC#57a16877058a445894f10dbfe02b2076.34_0#1755617597|session#991e6e4906254ea8967a2f064364d397#1692374657; OptanonConsent=isGpcEnabled=0&datestamp=Fri+Aug+18+2023+09%3A33%3A16+GMT-0600+(Mountain+Daylight+Time)&version=202307.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=98b03369-efdc-4e7f-b14e-dad98ec846dc&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A0&geolocation=US%3BUT&AwaitingReconsent=false; s_ppn=namejet.com/download.action",
//   Referer: "https://www.namejet.com/download.action?format=csv",
//   "Referrer-Policy": "strict-origin-when-cross-origin",
// };

// async function fetchAndSaveNameJetCSV() {
//   try {
//     const response = await fetch(url, {
//       //   headers,
//       body: null,
//       method: "GET",
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

import fetch from "node-fetch";
import fs from "fs";

const url = "https://www.namejet.com/file_dl.sn?file=preorderstarting1.csv";

async function fetchAndSaveNameJetCSV() {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
        Referer: "https://www.namejet.com/",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const csvData = await response.text();

    fs.writeFileSync("namejet_data.csv", csvData, "utf-8");
    console.log("CSV data saved to namejet_data.csv");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

fetchAndSaveNameJetCSV();
