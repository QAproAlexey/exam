import { deleteUser, tokenResponse } from  '../helpers/apiHelpers';

import { credentialsForAPI } from '../testData/dataForTests';
import { test } from '@playwright/test';

test.describe('2 tests: API login, API delete User', async () => {
});
test.beforeEach(async ({ page }) => {
  await page.goto ('https://reqres.in/')
});
test('API Login Test', async () => {
    await tokenResponse (credentialsForAPI.email, credentialsForAPI.password);
});
test('API Delete User', async () => {
await deleteUser ();
})
