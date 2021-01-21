import octokit from '../init';


export default async (body,title,repo,owner) => {

    return await octokit.request("POST /repos/{owner}/{repo}/issues", {
        owner: owner,
        repo: repo,
        title: title,
        labels:['bug'],
        body: body
      });

}