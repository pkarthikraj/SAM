'use strict';

const moment = require('moment-timezone'); 

module.exports.getServerDateTime = (event, context, callback) => {
    
  console.log(context.awsRequestId + ' Starting lambda function execution as a third time...');
  console.log('Lambda Request: ' + JSON.stringify(event));
  
  var serverTime = moment().tz("America/New_York").format();

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'v2.0: RequestID: ' + context.awsRequestId + ' | Server date: ' + serverTime
    }),
  };

  console.log('Lambda Response: ' + JSON.stringify(response));

  callback(null, response);
};