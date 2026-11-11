// All Locators

import { test } from '@playwright/test';

const Login = require("../pages/Login");
const Dashboard = require("../pages/Dashboard");
const Cart = require("../pages/Cart");
const OrderSummary = require("../pages/OrderSummary");
//const Logout = require("../pages/Logout");
import { Logout } from '../pages/Logout';

test('Sauce Demo Automation POM', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.gotoLoginPage();
  await loginPage.loginCredentials("standard_user","secret_sauce");
  
  const dashBoard = new Dashboard(page);
  await dashBoard.addProduct();
  await dashBoard.removeProduct();

  const cartPage = new Cart(page);
  await cartPage.gotoCart();
  await cartPage.backToDashboard();
  await cartPage.gotoCart();
  await cartPage.removeItem();
  await cartPage.chceckOutItem("TestOne",  "TestTwo", "965545");
  await cartPage.cancelCheckout();
  await cartPage.gotoCart();
  await cartPage.chceckOutItem("TestOne",  "TestTwo", "965545");
 
  const summary = new OrderSummary(page);
  await summary.finishOrder();

  const logOut = new Logout(page);
  await logOut.LogoutPage();

});
