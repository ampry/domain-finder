import dropcatch from "./utils/dropcatch.js";
import namejet from "./utils/namejet.js";
import godaddy from "./utils/godaddy.js";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  // sleep(1000);
  // await dropcatch();
  sleep(1000);
  await namejet();
  // sleep(1000);
  // await godaddy();
})();
