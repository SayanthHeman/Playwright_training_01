import {test} from '@playwright/test';


test('Window Handle', async({page, context}) => {

    await page.goto('https://the-internet.herokuapp.com/windows');
    // Promise dot all means "start several slow things together, and wait until all of them are finished."
    // Promise dot all starts the waiting and the click together, so nothing gets missed.
    const [newPage] = await Promise.all([

        context.waitForEvent('page'),
        page.click('[href="/windows/new"]')
    ]);
    console.log(await newPage.title());
    await newPage.close(); // To close the page if not needed
    // page. is for first page and newPage. for the newly opened page
});
