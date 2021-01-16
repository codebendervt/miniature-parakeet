// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getData from 'sauveur_core/fetch/fetch.js'
import mailchimp from "@mailchimp/mailchimp_marketing";
const md5 = require("md5");


mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_SECRET,
    server: "us18",
});

const listId = "ce85a9bf3d"; //Sauveur Audience
//const email = "rawk.work@gmail.com";
//const subscriberHash = md5(email.toLowerCase());


export default async (req, res) => {
    let response = null;
    const statusCheck = {
        email: md5(req.body.email.toLowerCase()),
        type: req.body.type, //update //check
        //status: req.body.status //subscribed //pending
    };

    try {
        if (statusCheck.type == "check") {
            response = await mailchimp.lists.getListMember(
                listId,
                statusCheck.email
            );
        } else if (statusCheck.type == "update") {
            response = await mailchimp.lists.updateListMember(
                listId,
                statusCheck.email,
                {
                    status: "unsubscribed"
                }
            );
        }

        console.log(response);
        res.statusCode = 200
        res.json(response)
    } catch {
        console.log(response);
        res.statusCode = 400
        res.json({ state: "error" })
    }





}

