window._ = require('lodash');

try {
    window.Popper = require('popper.js').default;
    require('bootstrap');
} catch (e) {}

import utils from './utils.js';
window.utils = utils;

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';