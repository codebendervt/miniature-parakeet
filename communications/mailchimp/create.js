// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getData from 'sauveur_core/fetch/fetch.js'
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_SECRET,
  server: "us18",
});


// information needed to create audience
// const event = {
//     name: "JS Developers Meetup"
//   };
  
// const footerContactInfo = {
//     company: "Mailchimp",
//     address1: "675 Ponce de Leon Ave NE",
//     address2: "Suite 5000",
//     city: "Atlanta",
//     state: "GA",
//     zip: "30308",
//     country: "US"
//   };
  
// const campaignDefaults = {
//     from_name: "Gettin' Together",
//     from_email: "gettintogether@example.com",
//     subject: "JS Developers Meetup",
//     language: "EN_US"
//   };
  


export default async (req, res) => {

    // const response = await mailchimp.lists.createList({
    //     name: event.name,
    //     contact: footerContactInfo,
    //     permission_reminder: "permission_reminder",
    //     email_type_option: true,
    //     campaign_defaults: campaignDefaults
    //   });
//   console.log(response);
//   // var data = await getData("http://api.sauveur.cloud/data/home","GET",true)
//   // console.log(data);
//  res.statusCode = 200
//  res.json(response)
}
