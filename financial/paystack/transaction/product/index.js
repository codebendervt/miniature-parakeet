// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {CreateProduct} from '../../utils'

export default async (req, res) => {

    try {

        const response = await CreateProduct(req.body);
        res.statusCode = 200
        res.json(response)
    } catch {

        res.json({ status: "error" })
    }


}
