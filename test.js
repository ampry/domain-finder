// https://www.namejet.com/file_dl.sn?file=preorderstarting1.csv

import axios from "axios";
import csv from "csv-parser";

// axios
//   .get("https://www.namejet.com/file_dl.sn?file=preorderstarting1.csv")
//   .then((response) => {
//     response.data
//       .pipe(csv())
//       .on("data", (row) => {
//         // Process each row of the CSV file
//         // Insert the data into the database
//         const query = "INSERT INTO your_table_name SET ?";
//         promisePool
//           .execute(query, row)
//           .then(() => {
//             console.log("Data inserted successfully");
//           })
//           .catch((error) => {
//             console.error("Error inserting data:", error);
//           });
//       })
//       .on("end", () => {
//         console.log("CSV file processed successfully");
//         pool.end(); // Close the database connection pool
//       });
//   })
//   .catch((error) => {
//     console.error("Error downloading the CSV file:", error);
//   });
try {
  axios
    .get("https://www.namejet.com/file_dl.sn?file=preorderstarting1.csv")
    .then((response) => {
      response.data
        .pipe(csv())
        .on("data", (row) => {
          console.log(row);
        })
        .on("end", () => {
          console.log("CSV file processed successfully");
        });
    })
    .catch((error) => {
      console.error("Error downloading the CSV file:", error);
    });
} catch (error) {
  console.log(error);
}
