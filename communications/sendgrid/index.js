// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getData from 'sauveur_core/fetch/fetch.js'
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_SECRET);


export default async (req, res) => {

    const msg = {
        to: req.body.email,
        from: 'rawk@sauveur.xyz', // Use the email address or domain you verified above
        templateId: 'd-ecfb19fc86f14930a051da30234b7c66',
        dynamicTemplateData: {
            subject: req.body.subject,
            name: req.body.name,
            message: 'Welcome to your one stop shop to manage your digital assets',
        },
    };



    try {
        const response = await sgMail.send(msg);
        res.statusCode = 200
        res.json(response)
    }
    catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body)
        }
    }

}
