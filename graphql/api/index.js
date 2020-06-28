const axios = require('axios');
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 15 * 60 * 1000
});

export const _axios = axios.create({
  baseURL: '/api/v1',
  adapter: cache.adapter
});

// const axiosCache = require('axios-cache-adapter');

// export const _axios = axiosCache.setup({
//   cache: {
//     maxAge: 1 * 60 * 1000
//   }
// });

export const _fake_api = process.env.FAKE_API;
export const _external_api = process.env.EXTERNAL_API;
