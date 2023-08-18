import fetch from "node-fetch";
import JSZip from "jszip";
import fs from "fs";

async function fetchAndSaveCSV() {
  try {
    const response = await fetch(
      "https://dropcatch-downloads.s3.amazonaws.com/production/Auction_Domains_PreRelease_2023-08-18.csv.zip?versionId=eMKa3Qe7iEOzxxaTQf8E6K3ECPmv.Z9w&AWSAccessKeyId=AKIAQ3BPCJT66GAQTHSY&Expires=1692460005&Signature=2ejDrZdAYRPVqwnuuBfzNbWL12I%3D&fileType=csv"
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const zipData = await response.arrayBuffer();
    const zip = await JSZip.loadAsync(zipData);

    // Assuming the zip contains only one CSV file
    const csvFileName = Object.keys(zip.files)[0];
    const csvData = await zip.files[csvFileName].async("string");

    // Save the CSV data to a file
    fs.writeFileSync("dropcatch.csv", csvData);

    console.log("CSV data saved as output.csv");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchAndSaveCSV();
