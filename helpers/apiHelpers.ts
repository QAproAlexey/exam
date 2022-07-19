const {request, expect} = require('@playwright/test');
const apiUrl: String = `https://reqres.in`;

export const tokenResponse = async(email: string, password: string) => {
const requestContext = await request.newContext();
const _response = await requestContext.post(`${apiUrl}/api/login`, {
data: {
'email': email,
'password': password,
}
});
expect(_response.status()).toBe(200);
return await _response.json().token
};

export const deleteUser = async() => {
const requestDelete = await request.newContext();
const _response = await requestDelete.delete(`${apiUrl}/api/users/2`, {
});
expect(_response.status()).toBe(204);
};
