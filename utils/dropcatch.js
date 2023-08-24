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

const dropcatch = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"],
  });
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
};

export default dropcatch;
