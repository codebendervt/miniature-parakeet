import octokit from '../init';


export default async (body,id,repo,owner) => {

    return await octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
        owner: owner,
        repo: repo,
        issue_number: id,
        body: body
      })
}


