const axiosCache = require('axios-cache-adapter');

export const _axios = axiosCache.setup({
  cache: {
    maxAge: 1 * 60 * 1000
  }
});

export const _api = process.env.FAKE_API;
