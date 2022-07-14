const {request, expect} = require('@playwright/test');

  export const tokenResponse = async (email: string, password: string) => {
  const requestContext = await request.newContext();
  const _response = await requestContext.post('https://reqres.in/api/login', {
    data: {
      'email': email,
      'password': password,
  }
});
expect(_response.status()).toBe(200);
expect(_response.ok()).toBeTruthy();
console.log(await _response.json());
};

export const deleteUser = async () => {
  const requestDelete = await request.newContext();
  const _response = await requestDelete.delete('https://reqres.in/api/users/2', {
});
expect(_response.status()).toBe(204);
expect(_response.ok()).toBeTruthy();
};
