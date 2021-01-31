// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {create, read,update, remove, getAll } from '../init'





export default async (req, res, isHandler=true) => {

    let response = { status: "error" }
    try {

        switch (req.method) {
            case "POST":
                response = await create(req.body,"guap")
                break;
            case "GET":
                response = await read(req.body.id,"guap")
                break;
            case "PUT":
                response = await update(req.body.data, req.body.id,"guap")
                break;
            case "DELETE":
                response = await remove(req.body.id,"guap")
                break;
            default:
                response = await getAll()
        }


        if(isHandler){
            res.json(response)
        }else{
            return response
        }
       

    } catch (err) {
        console.log(err)
        if(isHandler){
            res.json({msg:err})
        }else{
            return {msg:err}
        }

    }


}


