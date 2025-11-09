import {Given,When,Then } from "@cucumber/cucumber";
import { chromium } from 'playwright';
import type { Browser, Page } from 'playwright';
import { NavigationComponent } from "../components/navigationComponent.ts";

let browser: Browser;
let page: Page;

Given('has opened the SFL website', { timeout: 60000 }, async function () {
  // buka browser sekali (jika belum)
  if (!this.browser) {
    this.browser = await chromium.launch({ headless: false });
  }

  // buat page baru untuk scenario ini
  this.page = await this.browser.newPage();

  await this.page.goto("https://dealls.com/sfl", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  await this.page.waitForTimeout(5000);
  this.navigation = new NavigationComponent(this.page);
});
         
When('Click on Cari Loker menu button', async function () {
    await this.page.click("role=link[name='Cari Loker']");
});

Then('Verify that the Cari Loker page is displayed', async function () {
    await this.navigation.verifyLokerPage();
    // await this.page.waitForTimeout(2000);
    await this.navigation.backToLanding();
});

When('Click on Mentoring menu button', async function () {
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('link', { name: '-on-1 Mentoring' }).click();
    // await this.page.getByRole('link', { name: '' }).click();
});

Then('Verify that the Mentoring page is displayed', async function () {
    // await this.page.waitForTimeout(2000);
    await this.navigation.verifyMentoringPage();
    await this.navigation.backToLanding();
});
    
When('Click on Perusahaan menu button', async function () {
    await this.page.waitForTimeout(1000);
    await this.page.click("role=link[name='Perusahaan']");
});

Then('Verify that the Perusahaan page is displayed', async function () {
    await this.navigation.verifyPerusahaanPage();
    // await this.page.waitForTimeout(2000);
    await this.navigation.backToLanding();
});

When('Click on Cek CV menu button', async function () {
    await this.page.waitForTimeout(1000);
    await this.page.click("role=link[name='Cek CV']");
});

Then('Verify that the Cek CV page is displayed', async function () {
    await this.navigation.verifyCekCVPage();
    // await this.page.waitForTimeout(2000);
    await this.navigation.backToLanding();
});
    
When('Click on Events dropdown', async function () {
    await this.page.waitForTimeout(2000);
    await this.page.getByRole('button', { name: 'Event' }).click();
});

When('Click on SGC Event button', async function () {
    await this.page.getByRole('link', { name: 'SGC Logo SejutaCita Global' }).click();
});

Then('Verify that the SGC Event page is displayed', async function () {
    await this.navigation.verifySGCPage();
});

When('Click on Indonesia Mengabdi Event button', async function () {
    await this.page.getByRole('link', { name: 'IDM Logo Indonesia Mengabdi' }).click();
});

Then('Verify that the Indonesia Mengabdi Event page is displayed', async function () {
    await this.navigation.verifyIndonesiaMengabdiPage();
});

When('Click on SFL Event button', async function () {
    await this.page.getByRole('link', { name: 'SFL Logo SejutaCita Future' }).click();
});

Then('Verify that the SFL Event page is displayed', async function () {
    await this.navigation.verifySFLPage();
    await this.page.waitForTimeout(2000);
});

// When('Click on Daftar Sekarang button and fill in the first registration form', async function () {
//     const page1Promise = this.page.waitForEvent('popup');
//     await this.page.getByRole('link', { name: 'Daftar Sekarang', exact: true }).click();
//     const page1 = await page1Promise;
//     await page1.getByRole('textbox', { name: 'Nama Lengkap' }).click();
//     await page1.getByRole('textbox', { name: 'Nama Lengkap' }).fill('Wisnu Rasyidin Azhari');
//     await this.page.waitForTimeout(2000);
// });

When('Click on Daftar Sekarang button', async function () {
    const popupPromise = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: 'Daftar Sekarang', exact: true }).click();

    const popup = await popupPromise;

    this.page = popup;

    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(2000);
});


Then('fill the first registration form', async function () {
    // await this.page.waitForLoadState('domcontentloaded');
    // await this.page.getByRole('textbox', { name: 'Nama Lengkap' }).click();
    await this.page.getByRole('textbox', { name: 'Nama Lengkap' }).click();
    await this.page.getByRole('textbox', { name: 'Nama Lengkap' }).fill('Wisnu Rasyidin Azhari');
    // await this.page.getByRole('textbox', { name: 'Nama Lengkap' }).press('Enter');
    // await this.page.waitForTimeout(2000);
    await this.page.getByRole('textbox', { name: 'Tanggal Lahir (min. 13 tahun' }).click();
    await this.page.getByRole('textbox', { name: 'Tanggal Lahir (min. 13 tahun' }).fill('02/10/2004');
    // await this.page.getByRole('textbox', { name: 'Tanggal Lahir (min. 13 tahun' }).press('Enter');
    // await this.page.waitForTimeout(2000);
    await this.page.getByRole('textbox', { name: 'Nomor WhatsApp (jika tidak' }).click();
    await this.page.getByRole('textbox', { name: 'Nomor WhatsApp (jika tidak' }).fill('85893438967');
    // await this.page.getByRole('textbox', { name: 'Nomor WhatsApp (jika tidak' }).press('Enter');
    // await this.page.getByRole('combobox', { name: 'Dari mana kamu' }).click();
    // await this.page.waitForTimeout(2000);
    await this.page.getByRole('combobox', { name: 'Dari mana kamu mengetahui SejutaCita' }).click();
    await this.page.getByRole('option', { name: 'LinkedIn' }).click();
    await this.page.getByRole('textbox', { name: 'Provinsi & Kota Domisili Saat' }).click();
    await this.page.getByRole('textbox', { name: 'Provinsi & Kota Domisili Saat' }).fill('Klaten, Jawa Tengah');
    // await this.page.getByRole('textbox', { name: 'Provinsi & Kota Domisili Saat' }).press('Enter');
    // await this.page.waitForTimeout(2000);
    await this.page.getByRole('textbox', { name: 'Instansi Saat Ini (Sekolah/' }).click();
    await this.page.getByRole('textbox', { name: 'Instansi Saat Ini (Sekolah/' }).fill('STMIK Amikom Surakarta');
    // await this.page.getByRole('textbox', { name: 'Instansi Saat Ini (Sekolah/' }).press('Enter');  
    // await this.page.waitForTimeout(2000); 
    await this.page.getByText('Kuliah D3/D4/S1/S2').click();
    await this.page.getByRole('textbox', { name: 'Ceritakan mengapa kamu ingin' }).click();
    await this.page.getByRole('textbox', { name: 'Ceritakan mengapa kamu ingin' }).fill('Saya ingin berkontribusi untuk masa depan indonesia menjadi lebih cerah');
    // await this.page.getByRole('textbox', { name: 'Ceritakan mengapa kamu ingin' }).press('Enter');
    await this.page.waitForTimeout(2000);
    
});

When('Click on Selanjutnya button', async function () {
    await this.page.getByRole('button', { name: 'Selanjutnya' }).click();
    await this.page.waitForTimeout(2000); 
});

Then('fill the second registration form', async function () {
    await this.page.getByText('Reguler').click();
    await this.page.locator('div').filter({ hasText: /^Personal Motivation Letter$/ }).nth(1).click();
});

Then(
  'fill the last registration form',
  { timeout: 60000 },
  async function () {
    await this.page.getByRole('button', { name: 'Skip, Gak Dulu Deh' }).click();
    await this.page.waitForTimeout(1000);

    await this.page
      .getByRole('textbox', { name: /Tulis akun utama IG kamu/i })
      .fill('@rasyidinazhari');

    const fileInput1 = this.page.locator('input[type="file"]').first();
    await fileInput1.setInputFiles('src/test/assets/1760643117095.png');

    const fileInput2 = this.page.locator('input[type="file"]').nth(1);
    await fileInput2.setInputFiles('src/test/assets/1760643117095.png');
    await fileInput2.setInputFiles('src/test/assets/lai.jpeg');

    await this.page.getByText('Saya mengerti bahwa sudah').click();
    await this.page.getByText('Saya telah membaca Buku').click();
    await this.page.getByText('Saya mengetahui bahayanya').click();
    await this.page.getByText('Saya menyatakan tidak').click();

    await this.page.getByRole('button', { name: 'Selanjutnya' }).click();
  }
);




// Then('fill the last registration form', async function () {
//     await this.page.getByRole('button', { name: 'Skip, Gak Dulu Deh' }).click();
//     await this.page.waitForTimeout(1000);
//     await this.page.getByRole('textbox', { name: 'Tulis akun utama IG kamu (' }).click();
//     await this.page.getByRole('textbox', { name: 'Tulis akun utama IG kamu (' }).fill('@rasyidinazhari');
//     const mention = this.page.locator('[id="file::rs::trigger"]');
//     const share1 = this.page.getByRole('button', { name: 'Pilih File (Max. 5MB)' });
//     const share = this.page.locator('[id="file::ru::trigger"]');
//     await mention.setInputFiles('1760643117095.png');
//     await share1.setInputFiles('1760643117095.png');
//     await share.setInputFiles('1760643117095.png');
//     await this.page.locator('[id="checkbox::r11::control"]').click();
//     await this.page.locator('[id="checkbox::r12::control"]').click();
//     await this.page.locator('[id="checkbox::r13::control"]').click();
//     await this.page.locator('[id="checkbox::r14::control"]').click();
//     await this.page.getByRole('button', { name: 'Selanjutnya' }).click();
// });