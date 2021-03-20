// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {create, read,update, remove } from '../init'





export default async (req, res) => {

    let response = { status: "error" }

    let id = req.query.id;
    
    try {

        switch (req.method) {
            case "POST":
                response = await create(req.body)
                break;
            case "GET":
                response = await read(id)
                break;
            case "PUT":
                response = await update(req.body.data, req.body.id)
                break;
            case "DELETE":
                response = await remove(req.body.id)
                break;
            default:
                response = { status: "not a proper request" }
        }


        res.json(response)
    } catch (err) {

        console.log(err)
        res.json({msg:err})
    }


}


