// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getData from 'sauveur_core/fetch/fetch.js'
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_SECRET,
    server: "us18",
});

const listId = "ce85a9bf3d"; //Sauveur Audience



export default async (req, res) => {

    const subscribingUser = {
        firstName: req.body.name,
        lastName: req.body.surname,
        email: req.body.email,
        status: req.body.status //subscribed //pending
    };

    try{
        const response = await mailchimp.lists.addListMember(listId, {
            email_address: subscribingUser.email,
            status: stsubscribingUser.status,
            merge_fields: {
                FNAME: subscribingUser.firstName,
                LNAME: subscribingUser.lastName
            }
        });
        
        console.log(response);
        res.statusCode = 200
        res.json(response)
    }catch{
        res.statusCode = 400
        res.json({state: "error"}) 
    }

 

 

}

