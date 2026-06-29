import { test, expect } from '@playwright/test';

test.describe('Authentication Feature', () => {
  
  test('test01', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  });

 
    test('test02', async ({ page }) => {
     await page.goto('https://testautomationpractice.blogspot.com/');
    });
  });
