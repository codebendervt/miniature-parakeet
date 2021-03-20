// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getAll} from '../init'





export default async (req, res) => {

    let response = { status: "error" }

    try {
        response = await getAll();

        res.json(response)

    } catch (err) {

        console.log(err)
        res.json({msg:err})
    }


}


