const accountSid = process.env.SID; 
const authToken = process.env.AUTH; 
const client = require('twilio')(accountSid, authToken); 
 
const get = (name, date, time) => {
  client.messages 
      .create({ 
         body: `New event ${name} is coming up on ${date} at ${time}`, 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+375291408444' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
}

module.exports = get;
