import { Locator, expect, test } from '@playwright/test';

/* Завдання 1 Check initial state

Зайти на https://demoqa.com/

Перевірити чи всі категорії відображаються. Список очікуваних категорій на скріні: */

test.describe(async () => {
    test('All categories are visible', async ({ page }) => {
        let categories: string[] = ['Elements', 'Forms', 'Alerts, Frame & Windows', 'Widgets', 'Interactions', 'Book Store Application']
        await page.goto('https://demoqa.com');
        for(let category of categories){
            let categoryToCheck = page.getByText(`${category}`)
            await expect(categoryToCheck).toBeVisible()
        }
    })

})

/* Завдання 2 Check initial state

Перейти з головної сторінки на категорію Elements

Перейти на підкатегорію Buttons (юрл має бути https://demoqa.com/buttons)

Клікнути на всі кнопки так як вимагається, перевірити чи після кліку зявилось повідомлення про те що кнопка клікнулась і яка саме кнопка клікнулась */

test.describe(async () => {
    test('Click all buttons on the Elements page', async ({ page }) => {
        await page.goto('https://demoqa.com');
        await page.getByText("Elements").click()
        await page.getByText("Buttons").click()
        await page.getByRole('button', {name: 'Double Click Me'}).dblclick()
        await expect(page.getByText("You have done a double click")).toBeVisible()
        await page.getByRole('button', {name: 'Right Click Me'}).click({button: 'right'})
        await expect(page.getByText("You have done a right click")).toBeVisible()
        await page.getByRole('button', {name: 'Click Me', exact: true}).click()
        await expect(page.getByText("You have done a dynamic click")).toBeVisible()
    })

})