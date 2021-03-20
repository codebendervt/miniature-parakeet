const credentials = {
    apiKey: process.env.AfricaAPI,         // use your sandbox app API key for development in the test environment
    username: process.env.AfricaUsername,      // use 'sandbox' for development in the test environment
};
const Africastalking = require('africastalking')(credentials);

// Initialize a service e.g. SMS
const sms = Africastalking.SMS


export default async (req, res) => {

   
    req.body.to = req.body.to.split(",")
    console.log(req.body)
    const options = req.body

    try {

        // Send message and capture the response or error
        sms.send(options)
            .then(response => {
                res.json({ message:response })
              
            })
            .catch(error => {
                res.json({ message:error })
            });

    } catch {
        res.json({ message: "failed to send sms" })
    }


}
