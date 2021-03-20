// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import transaction from './init'
import {ReadToken} from '../../../token/init'

export default async (req, res) => {

    try{
        let data = req.body

        let dec = ReadToken(data)
        const response = await transaction(dec.data)
        // var data = await getData("http://api.sauveur.cloud/data/home","GET",true)
        // console.log(data);
       res.statusCode = 200
       res.json(response)
    }catch{

        res.json({status:"error"})
    }


}
