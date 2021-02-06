// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var jwt = require('jsonwebtoken');

export default async (req, res) => {


    try {
    
     
    const token = jwt.sign({issuer:"sauveur",exp: Math.floor(Date.now() / 1000) + (60 * 60),data:req.body}, 'shhhhh');
    
    res.json({token:token})

    } catch (err) {

        console.log(err)
        res.json({msg:err, status:"error"})
    }


}