import fetch from "node-fetch";
import fs from "fs";

// Define the array of words to check against
const wordArray = ["veteran", "disability", "cameron"];

async function fetchData() {
  try {
    const response = await fetch(
      // "https://www.namejet.com/download/PreRelease.txt"
      "https://www.namejet.com/file_dl.sn?file=deletinglist.csv"
    );
    if (response.ok) {
      const data = await response.text();
      const rows = data.trim().split("\n");
      const filteredRows = rows.filter((row) => {
        const domain = row.split(",")[0];
        return wordArray.some((word) => domain.includes(word));
      });

      const nestedArray = filteredRows.map((row) => row.split(","));

      const jsonData = JSON.stringify(nestedArray, null, 2);

      fs.writeFile("output.json", jsonData, "utf8", (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log("Data has been written to output.json");
        }
      });
    } else {
      console.error("Error:", response.status);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchData();
