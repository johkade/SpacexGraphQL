import CONFIG from '../../../const/config';

const axios = require('axios').default;

const spacexAxios = axios.create({
  baseURL: CONFIG.SPACEX_BASE,
  timeout: 2000,
});

export default spacexAxios;
