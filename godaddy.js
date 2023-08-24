import fetch from "node-fetch";
import fs from "fs";

function getCurrentDateFormatted() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const formattedDate = getCurrentDateFormatted();

const url = `https://auctions.godaddy.com/beta/findApiProxy/v3/aftermarket/find/auction/recommend?endTimeAfter=${formattedDate}T15%3A22%3A08.706Z&exportCSV=true`;

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

    fs.writeFileSync(
      `csv/godaddy-auction-${formattedDate}.csv`,
      csvData,
      "utf-8"
    );
    console.log("Go daddy CSV data saved.");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

fetchAndSaveCSV();
