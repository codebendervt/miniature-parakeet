import createIssue from '../utils/issue';



// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default async (req, res) => {


    try {
        const response = await createIssue(req.body.msg,req.body.title, "backpack", "sauveurXrawk")
        res.json(response)

    }
    catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body)
        }
    }

}