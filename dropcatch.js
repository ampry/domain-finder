// import fetch from "node-fetch";

// async function fetchAndSaveCSV() {
//   try {
//     const response = await fetch(
//       "https://dropcatch-downloads.s3.amazonaws.com/production/Auction_Domains_PreRelease_2023-08-24.csv.zip?versionId=eMKa3Qe7iEOzxxaTQf8E6K3ECPmv.Z9w&AWSAccessKeyId=AKIAQ3BPCJT66GAQTHSY&Expires=1692460005&Signature=2ejDrZdAYRPVqwnuuBfzNbWL12I%3D&fileType=csv"
//     );
//     if (!response.ok) {
//       throw new Error(`Failed to fetch: ${response.statusText}`);
//     }

//     const zipData = await response.arrayBuffer();
//     const zip = await JSZip.loadAsync(zipData);

//     // Assuming the zip contains only one CSV file
//     const csvFileName = Object.keys(zip.files)[0];
//     const csvData = await zip.files[csvFileName].async("string");

//     // Save the CSV data to a file
//     fs.writeFileSync("dropcatch.csv", csvData);

//     console.log("CSV data saved as output.csv");
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// fetchAndSaveCSV();

import puppeteer from "puppeteer";
import JSZip from "jszip";
import fs from "fs";
import path from "path";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getCurrentDateFormatted() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const client = await page.target().createCDPSession();
  await client.send("Page.setDownloadBehavior", {
    behavior: "allow",
    downloadPath: "downloads",
  });

  try {
    await page.goto("https://www.dropcatch.com/downloads", {
      waitUntil: "networkidle0",
    });

    const prereleaseButton =
      "body > app-root > div > div > app-downloads > main > section > article:nth-child(1) > label:nth-child(7) > input[type=radio]";
    const csvButton =
      "body > app-root > div > div > app-downloads > main > section > article:nth-child(2) > label:nth-child(4) > input[type=radio]";
    const submitButton =
      "body > app-root > div > div > app-downloads > main > section > article:nth-child(2) > div > button";

    await page.waitForSelector(prereleaseButton);
    await page.click(prereleaseButton);
    await sleep(2000);
    console.log("Pre-release button clicked");

    await page.waitForSelector(csvButton);
    await page.click(csvButton);
    await sleep(2000);
    console.log("CSV format button clicked");

    await page.waitForSelector(submitButton);
    await page.click(submitButton);
    await sleep(2000);
    console.log("Download button clicked");

    await sleep(5000);

    console.log("File downloaded successfully");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await browser.close();
  }

  const formattedDate = getCurrentDateFormatted();
  const sourceFilePath = `downloads/Auction_Domains_PreRelease_${formattedDate}.csv.zip`;

  const targetDirectory = "csv";

  fs.readFile(sourceFilePath, (err, data) => {
    if (err) {
      console.error("Error reading source file:", err);
      return;
    }

    const zip = new JSZip();

    zip
      .loadAsync(data)
      .then((zip) => {
        // Create the target directory if it doesn't exist
        if (!fs.existsSync(targetDirectory)) {
          fs.mkdirSync(targetDirectory, { recursive: true });
        }

        // Extract each file
        Object.keys(zip.files).forEach((filename) => {
          const fileData = zip.files[filename].async("nodebuffer");
          const targetFilePath = path.join(targetDirectory, filename);

          fileData.then((data) => {
            fs.writeFileSync(targetFilePath, data);
            console.log("File extracted and saved:", targetFilePath);
          });
        });
      })
      .catch((error) => {
        console.error("Error extracting zip:", error);
      });
  });
})();
