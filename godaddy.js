// change end time after according to the day it is today...

// fetch(
//   "https://auctions.godaddy.com/beta/findApiProxy/v3/aftermarket/find/auction/recommend?endTimeAfter=2023-08-18T15%3A22%3A08.706Z&exportCSV=true",
//   {
//     headers: {
//       accept: "text/csv",
//       "accept-language": "en-US,en;q=0.9",
//       "sec-ch-ua": '"Not)A;Brand";v="24", "Chromium";v="116"',
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": '"macOS"',
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-origin",
//       "x-gdfindam-apikey": "auctions_fos",
//       "x-gdfindam-reqid": "9984fa6f-60bf-4260-8e0e-0c9dc975e1d0",
//       cookie:
//         "visitor=vid%3D2a65f1f9-a231-4d0d-86b9-e9e8f21304f6; _policy=%7B%22restricted_market%22:true,%22tracking_market%22:%22explicit%22%7D; market=en-US; pwinteraction=Tue%2C%2011%20Jul%202023%2021%3A39%3A16%20GMT; ASP.NET_SessionId=1gkonr1lcwkabmp0jphynu3f; pathway=e6ef6dd5-9a11-45f3-8e06-714f55a06cf4; traffic=; expBannerSplit=B; fb_sessiontraffic=S_TOUCH=&pathway=e6ef6dd5-9a11-45f3-8e06-714f55a06cf4&V_DATE=&pc=2&C_TOUCH=2023-08-18T15:21:22.686Z; OPTOUTMULTI=0:0%7Cc2:1%7Cc9:1%7Cc11:1; utag_main=v_id:018946e4f2f9004458089f61425005075002106d00fb8$_sn:3$_ss:0$_st:1692373883972$ses_id:1692371948880%3Bexp-session$_pn:2%3Bexp-session; AWSALB=WVa1GEcUu4zOk9OCtQfUSRUP4PysqCO3Dtm+gH8xj1qReWDDZIHQUxhd6HS3yA1BAqMmht5cx+Nx36MO4CjaHhAuFwqvWcVq0VKD29Nm4Fq00oIYM8mXqhcjlJmR; AWSALBCORS=WVa1GEcUu4zOk9OCtQfUSRUP4PysqCO3Dtm+gH8xj1qReWDDZIHQUxhd6HS3yA1BAqMmht5cx+Nx36MO4CjaHhAuFwqvWcVq0VKD29Nm4Fq00oIYM8mXqhcjlJmR; tcc_refer=refer_e_id=domains.auctions.search%252Fexport%252Fsearch-results.btn.click&refer_corrid=641718656",
//     },
//     referrerPolicy: "no-referrer",
//     body: null,
//     method: "GET",
//   }
// );

import fetch from "node-fetch";
import fs from "fs";

const url =
  "https://auctions.godaddy.com/beta/findApiProxy/v3/aftermarket/find/auction/recommend?endTimeAfter=2023-08-18T15%3A22%3A08.706Z&exportCSV=true";

const headers = {
  accept: "text/csv",
  "accept-language": "en-US,en;q=0.9",
  "sec-ch-ua": '"Not)A;Brand";v="24", "Chromium";v="116"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"macOS"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "x-gdfindam-apikey": "auctions_fos",
  "x-gdfindam-reqid": "9984fa6f-60bf-4260-8e0e-0c9dc975e1d0",
  cookie: "visitor=vid%3D2a65f1f9-a231-4d0d-86b9-e9e8f21304f6; ...", // Your full cookie string here
};

async function fetchAndSaveCSV() {
  try {
    const response = await fetch(url, {
      headers,
      referrerPolicy: "no-referrer",
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const csvData = await response.text();

    fs.writeFileSync("domain_data.csv", csvData, "utf-8");
    console.log("CSV data saved to domain_data.csv");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

fetchAndSaveCSV();
