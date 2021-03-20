// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {GetBanks} from '../../utils'

export default async (req, res) => {

    try {

        const response = await GetBanks();

        res.statusCode = 200
        res.json(response)
    } catch(e) {
        console.log(e)
        res.json({ status: "error" })
    }


}
