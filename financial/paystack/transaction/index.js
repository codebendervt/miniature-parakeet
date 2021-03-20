// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import transaction from './init'

export default async (req, res) => {

    try{
        let data = req.body
        const response = await transaction(data)
        // var data = await getData("http://api.sauveur.cloud/data/home","GET",true)
        // console.log(data);
       res.statusCode = 200
       res.json(response)
    }catch{

        res.json({status:"error"})
    }


}
