// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import paystackSDK from '../utils/init'
import endpoints from '../utils/endpoints'

export default async (req, res) => {

    try{
        let url = `${endpoints.verify + req.body.referance}`
        const response = await paystackSDK('GET',url);
        // var data = await getData("http://api.sauveur.cloud/data/home","GET",true)
        // console.log(data);
       res.statusCode = 200
       res.json(response)
    }catch{

        res.json({status:"error"})
    }


}
