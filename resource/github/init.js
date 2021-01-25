const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: process.env.GITHUB_KEY });

export default octokit;