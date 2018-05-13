'use strict'

const gtrans = require('google-translate-api');


let translate = async(msg, from, to) => {
    console.log(`"${msg}" ${from} --> ${to}`);
    return;

    return gtrans(msg, {
        from: from,
        to: to
    }).then(res => {
        return res;
    }).catch(err => {
        console.error(err.message);
        return false;
    });
}

module.exports.translate = translate;