const {request, expect} = require('@playwright/test');
const mainUrl: String = 'https://reqres.in/';

  export const tokenResponse = async (email: string, password: string) => {
  const requestContext = await request.newContext();
  const _response = await requestContext.post(`${mainUrl}/api/login`, {
    data: {
      "email": "email",
      "password": "password"
  }
});
expect(_response.status()).toBe(200);
expect(_response.ok()).toBeTruthy();
console.log(await _response.json());
};

export const deleteUser = async () => {
  const requestContext = await request.newContext();
  const _response = await requestContext.delete(`${mainUrl}//api/users/2`, {
});
expect(_response.status()).toBe(204);
expect(_response.ok()).toBeTruthy();
};
