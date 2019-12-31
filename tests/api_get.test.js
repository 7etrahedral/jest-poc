const api = require('../page-objects/api_get_request.js');
const globalData = require('../helper/global');

describe('get describe', () => {
  test('get test', async () => {
    const response = await api.getAPI();
    expect(response.status).toBe(globalData.response.ok);
  });
});
