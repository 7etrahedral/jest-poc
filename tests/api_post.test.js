/* eslint-disable no-underscore-dangle */

const api = require('../page-objects/api_post_request.js');
const globalData = require('../helper/global');

describe('post describe', () => {
  test('post test', async () => {
    const response = await api.postAPI(globalData.testData);
    expect(response.body._meta.code).toBe(globalData.response.created);
  });
});
