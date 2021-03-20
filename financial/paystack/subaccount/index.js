// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {CreateSubAccount} from '../utils'

export default async (req, res) => {

    try {

        const response = await CreateSubAccount(req.body);

        res.statusCode = 200
        res.json(response)
    } catch(e) {
        console.log(e)
        res.json({ status: "error" })
    }


}







'{ "business_name": "Sunshine Studios", "settlement_bank": "044", "account_number": "0193274682", "percentage_charge": 18.2 }'