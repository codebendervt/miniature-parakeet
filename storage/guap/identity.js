import {findById} from '../init'





export default async (req, res) => {

    let response = { status: "error" }

    try {
        response = await findById(req.body.id,'account');

        res.json(response)

    } catch (err) {

        console.log(err)
        res.json({msg:err})
    }


}
