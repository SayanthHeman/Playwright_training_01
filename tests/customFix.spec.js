import { custtest } from "../utilFiles/fixtures.js";

custtest('Login with custom test', async ({logInPage}) =>{

  await logInPage.locator('[data-test="login-button"]').click();
});