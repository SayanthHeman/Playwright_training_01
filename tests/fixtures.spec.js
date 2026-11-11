import {test, chromium} from '@playwright/test';

test('First test', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
});

// Fixtures

test('Second Playwright Test', async({context})=>{  // inorder to open two diff tabs in 1 browser
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    await page1.goto("https://www.amazon.in/");
    await page2.goto("https://www.myntra.com/");
});

test('Open Myntra', async({page})=>{
    await page.goto("https://www.myntra.com/");
});

test("Go to google", async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.myntra.com/");
});

test('Using Launch', async()=>{                 // Need to import chromium also
    const browser = await chromium.launch();   // In the fixtures, this is already defined, so this step is obsolete
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.myntra.com/");
});

// test.only