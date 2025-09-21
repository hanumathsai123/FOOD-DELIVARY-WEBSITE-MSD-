const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const accountSid = 'YOUR_TWILIO_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const twilioNumber = '+1234567890'; // your Twilio number
const client = new twilio(accountSid, authToken);

let otpStore = {}; // store OTP temporarily

// Send OTP
app.post('/send-otp', (req, res) => {
  const phone = req.body.phone;
  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[phone] = otp;
  
  client.messages.create({
    body: `Your FastBite OTP is ${otp}`,
    from: twilioNumber,
    to: phone
  }).then(message => res.json({success:true, messageSid:message.sid}))
    .catch(err => res.json({success:false, error:err.message}));
});

// Verify OTP
app.post('/verify-otp', (req,res)=>{
  const {phone, otp} = req.body;
  if(otpStore[phone] && otpStore[phone] == otp){
    delete otpStore[phone];
    res.json({success:true});
  } else res.json({success:false, error:"Invalid OTP"});
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
