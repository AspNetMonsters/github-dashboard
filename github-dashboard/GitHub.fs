namespace dashboard

open Suave
open Suave.Successful
open Octokit

module GitHub =

    let list = 
            let client = new GitHubClient(new ProductHeaderValue("github-dashboard"))
            let user = client.User.Get("stimms").Result
            OK user.Bio
        
  
        