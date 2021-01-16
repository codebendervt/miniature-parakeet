// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var redis = require("redis");
var bluebird = require("bluebird");

// Convert Redis client API to use promises, to make it usable with async/await syntax
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);



const getCache = async (name) => {
       // Demonstrate "SET Message" executed as expected...
       console.log("\nCache command: GET",name);
       return await cacheConnection.getAsync(name);
}

const setCache = async (data, name) => {
    console.log("\nCache command: SET" + name);
    return await cacheConnection.setAsync(name,JSON.stringify(data));
}


export default async (req, res) => {

    let response = false

    // Simple PING command
    try {
        console.log("\nCache command: PING");
        console.log("Cache response : " + await cacheConnection.pingAsync());

        
        switch (req.method) {
            case "POST":
                response = await setCache(req.body.data,req.body.name)
                break;
            case "GET":
                response = await getCache(req.body.name)
                break;
            // case "PUT":
            //     response = await update(req.body.data, req.body.id)
            //     break;
            // case "DELETE":
            //     response = await remove(req.body.id)
            //     break;
            default:
                response = { status: "not a proper request" }
        }
 


        res.json({data: JSON.parse(response)});
    
    } catch (err) {
        console.log(err)
        

    res.json({status:"working on getting a cache system"})
    }


}
