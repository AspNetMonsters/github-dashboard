module GitHub 

open Microsoft.FSharp.Collections
open Suave
open Suave.Successful
open Suave.Filters
open Suave.Writers
open Octokit
open Newtonsoft

    type IssueRecord = { id: int; name: string; url: string}

    let list(name) = 
            
            let client = new GitHubClient(new ProductHeaderValue("github-dashboard"))
            let issues = client.PullRequest.GetAllForRepository("HTBox", "allReady").Result
            let listOfIssues = List.ofSeq(issues)
            let records =  listOfIssues |> List.map(fun iss -> { id = iss.Number; name= iss.Title; url= iss.Url.ToString() })
            
            OK (Newtonsoft.Json.JsonConvert.SerializeObject records)
            
        
  
        