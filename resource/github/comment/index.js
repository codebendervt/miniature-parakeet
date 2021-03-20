import createComment from '../utils/comment';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default async (req, res) => {


    try {
        const response = await createComment(req.body.msg,req.body.id, "backpack", "sauveurXrawk")
        res.json(response)

    }
    catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body)
        }
    }

}