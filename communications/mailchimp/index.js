// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getData from 'sauveur_core/fetch/fetch.js'
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_SECRET,
  server: "us18",
});


export default async (req, res) => {

  const response = await mailchimp.ping.get();
  console.log(response);
  // var data = await getData("http://api.sauveur.cloud/data/home","GET",true)
  // console.log(data);
 res.statusCode = 200
 res.json(response)
}
