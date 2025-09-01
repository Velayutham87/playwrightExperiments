import {test, expect} from "@playwright/test";

test.describe("My First Playwright Test", () => {
    //navigate to google.com and search for test automation using playwright

    let txtToSearch = "test automation using playwright";
    test.beforeEach("Navigate to Google.com", async ({page})=> {
        await page.goto("https://www.google.com");
        await expect(page).toHaveTitle(/Google/);
    })

    test("Search for test automation using playwright", async ({page})=> {
        //page.getByRole("textbox", {name: "Search"}).fill(txtToSearch);
        page.getByPlaceholder('textArea[aria-autocomplete="both"]').fill(txtToSearch);
        page.getByRole("button", {name: "btnK"}).click();
    })
})