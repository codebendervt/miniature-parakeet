// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {findById} from '../init'





export default async (req, res) => {

    let response = { status: "error" }

    try {
        response = await findById(req.body.id,"_brand");

        res.json(response)

    } catch (err) {

        console.log(err)
        res.json({msg:err})
    }


}


