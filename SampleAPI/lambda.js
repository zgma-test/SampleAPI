// let api = require('./api.json');
let api = require('./skipped-api-test.json');

exports.handler = function(event, context, callback) {

    console.log(api);
    
    callback(null, api);
}