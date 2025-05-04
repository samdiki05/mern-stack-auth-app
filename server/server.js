import {app} from "./app.js"
import dotenv from "dotenv";
dotenv.config();


console.log("TWILIO_SID:", process.env.TWILIO_SID);  // Check if the SID is being read
console.log("TWILIO_PHONE_NUMBER:", process.env.TWILIO_PHONE_NUMBER);
console.log("TWILIO_AUTH_TOKEN:", process.env.TWILIO_AUTH_TOKEN);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
})