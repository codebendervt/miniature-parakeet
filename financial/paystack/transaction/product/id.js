// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {GetProduct} from '../../utils'

export default async (req, res) => {

    try {

        const response = await GetProduct(req.body.id);
        res.statusCode = 200
        res.json(response)
    } catch {

        res.json({ status: "error" })
    }


}
