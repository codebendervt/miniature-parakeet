// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var jwt = require('jsonwebtoken');

export default async (req, res) => {


    try {
        
    var decoded = jwt.verify(req.body.token, 'shhhhh');

    res.json(decoded)

    } catch (err) {

        console.log(err)
        res.json({msg:err})
    }


}


