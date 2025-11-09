Feature: Navigation menu and Registration testing

    Background:
        Given has opened the SFL website

    @menuNavigation
    Scenario: Verify navigation menu items
        When Click on Cari Loker menu button
        Then Verify that the Cari Loker page is displayed

        When Click on Mentoring menu button
        Then Verify that the Mentoring page is displayed

        When Click on Perusahaan menu button
        Then Verify that the Perusahaan page is displayed

        When Click on Cek CV menu button
        Then Verify that the Cek CV page is displayed

        When Click on Events dropdown
        And Click on SGC Event button
        Then Verify that the SGC Event page is displayed

        When Click on Events dropdown
        And Click on Indonesia Mengabdi Event button
        Then Verify that the Indonesia Mengabdi Event page is displayed

        When Click on Events dropdown
        And Click on SFL Event button
        Then Verify that the SFL Event page is displayed

    @registration
    Scenario: Verify registration process
        When Click on Daftar Sekarang button 
        Then fill the first registration form
        When Click on Selanjutnya button
        Then fill the second registration form
        When Click on Selanjutnya button
        Then fill the last registration form

