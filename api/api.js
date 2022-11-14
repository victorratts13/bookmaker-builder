import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';
import Core from '../core/core.js';

const core = new Core();

var header = core.OpenHeaders();
const jar = new CookieJar();
const client = wrapper(axios.create({
    baseURL: 'https://stats.fn.sportradar.com',
    headers: header,
    jar: jar
}));

export default client;