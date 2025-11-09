import { expect } from "@playwright/test";
import type { Browser, Page } from 'playwright';

export class NavigationComponent {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyLokerPage() {
    await expect(
      this.page.getByRole('heading', { name: 'Cari Lowongan Kerja Pakai' })).toBeVisible();
  }

  async backToLanding() {
    await this.page.goto("https://dealls.com/sfl", {
        waitUntil: "domcontentloaded",
        timeout: 60000,
    });
  }

  

  async verifyMentoringPage() {
    await expect(
      this.page.getByRole("heading", {
        name: /Dapatkan Mentoring Kehidupan/i,
      })
    ).toBeVisible();
  }

  async verifyPerusahaanPage() {
    await expect(
      this.page.getByRole("heading", {
        name: /Perusahaan Terbaik di Indonesia Sekarang/i,
      })
    ).toBeVisible();
  }

  async verifyCekCVPage() {
    await expect(
      this.page.getByRole("heading", {
        name: /Tingkatkan Peluang Lolos/i,
      })
    ).toBeVisible();
  }

  async verifySGCPage() {
    await expect(
      this.page.getByRole('heading', { name: 'SejutaCita Global Career', exact: true })
    ).toBeVisible();
  }

  async verifySFLPage() {
    await expect(
      this.page.getByRole('heading', { name: 'Apa itu SejutaCita Future' })
    ).toBeVisible();
  }

  async verifyIndonesiaMengabdiPage() {
    await expect(
      this.page.getByRole('heading', { name: 'Apa itu Indonesia Mengabdi?' })
    ).toBeVisible();
  }

  async verifyRegistrationPage() {
    await expect(
      this.page.getByRole('heading', { name: 'SejutaCita Future Leaders Vol' })
    ).toBeVisible();
  }

}
 