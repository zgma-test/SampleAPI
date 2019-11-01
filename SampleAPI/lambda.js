let Swagger = require('swagger-client');
// let api = require('./api.json');
let api = require('./skipped-apis-test.json');

exports.handler = function (event, context, callback) {

    console.log(api);
    Swagger.http({
        url: `https://api.sandbox.transferwise.tech/quotes`,
        method: 'post',
        query: {},
        headers: { "Accept": "application/xml", "Content-Type": "application/json" },
        body: JSON.stringify({
            "a": 123
        })
    }).then((response) => {
        // your code goes here
    }).catch((err) => {
        // error handling goes here
    });

    callback(null, api);
}