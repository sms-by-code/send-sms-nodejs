function sendRequest(messageText,phoneNumber)
{

  var APIKEY = "PAST YOUR API KEY HERE";
  
  var request = require('request');
  
  request.post(
      'https://app.sms.by/api/v1/sendQuickSMS',
      { json: { token: APIKEY, message: messageText, phone: phoneNumber } },
      function (error, response, body) {
          if (!error && response.statusCode == 200) {
              console.log(body);
          }
      }
  );
  
}

function sendQuickSms(message,phone){
   
    sendRequest(message,phone);
  
}

// PHONE = 3572912345577
sendQuickSms("New message","PHONE NUMBER IN INTERNATIONAL FORMAT") ; 
