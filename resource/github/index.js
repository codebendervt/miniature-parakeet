const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: process.env.GITHUB_KEY });

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default async (req, res) => {


    try {
        const response = await octokit.request("GET /orgs/{org}/repos", {
            org: req.body.org,
            type: "private",
          });

          res.json(response)
    
    }
    catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body)
        }
    }

}
