let api = require('./api.json');

exports.handler = function(event, context, callback) {

    console.log(api);
    
    callback(null, api);
}