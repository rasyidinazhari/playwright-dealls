import { Before, After } from "@cucumber/cucumber";
import { chromium } from "playwright";

Before(async function () {
  // opsional kalau ingin open per-scenario di hook, 
  // tapi karena kita buka di Given, bagian ini bisa dikosongkan.
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
    this.browser = undefined;
  }
});
