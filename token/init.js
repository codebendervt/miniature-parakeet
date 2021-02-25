var jwt = require('jsonwebtoken');
let key = process.env.HASH || "shhhhh"

export const CreateToken = (data) => {
    let token =jwt.sign({issuer:"sauveur",exp: Math.floor(Date.now() / 1000) + (180 * 180),data:data}, `${key}`);

    return {token:token}
}

export const ReadToken = (body) =>{
    console.log(body)
    return  jwt.verify(body.token,`${key}`);

}

// export {ReadToken,CreateToken}