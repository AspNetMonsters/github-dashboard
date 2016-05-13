module GitHub 

open Microsoft.FSharp.Collections
open Suave
open Suave.Successful
open Suave.Filters
open Suave.Writers
open Octokit
open Newtonsoft

    type PR = { id: int; name: string; url: string}
    type Project = { name: string; pullRequests : PR list}
    type ProjectList = { projects: Project list }
    

    let list(owner, project) = 
            
            let client = new GitHubClient(new ProductHeaderValue("github-dashboard"))
            let issues = client.PullRequest.GetAllForRepository(owner, project).Result
            let records =  List.ofSeq(issues) |> List.map(fun iss -> { id = iss.Number; name= iss.Title; url= iss.Url.ToString() })
            let projects = [ { name = project;  pullRequests = records }]
            let result = { projects = projects }

            OK (Newtonsoft.Json.JsonConvert.SerializeObject result)
            
        
  
        