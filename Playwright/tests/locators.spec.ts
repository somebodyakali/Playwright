import { Locator, test } from '@playwright/test';

test.describe(async () => {
    test('Get locator by text', async ({ page }) => {
        await page.goto('/');
        const elementsCategory: Locator = page.getByText('Elements')
        await elementsCategory.click()
    })

})