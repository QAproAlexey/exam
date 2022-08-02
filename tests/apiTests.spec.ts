import { deleteUser, tokenResponse } from '../helpers/apiHelpers';

import { credentialsForAPI } from '../testData/dataForTests';
import { test } from '@playwright/test';

test('API Login Test', async () => {
    await tokenResponse(credentialsForAPI.email, credentialsForAPI.password);
});

test('API Delete User', async () => {
    await deleteUser();
})