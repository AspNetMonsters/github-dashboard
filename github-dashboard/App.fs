open Suave
open Suave.Filters
open Suave.Operators
open Suave.Writers
open Suave.Successful
open Suave.Files

module entry =

    let json = 
        setHeader "Content-Type" "application/json"

    let router = 
        choose [
            path "/" >=> (OK "Home")
            pathScan "/git/%s/%s" ( fun (owner, project) -> json >=> GitHub.list(owner, project)  )
            pathRegex "(.*)\.js" >=> Files.browseHome
        ]

    [<EntryPoint>]
    let start(args) = 
        startWebServer defaultConfig router
        0
    
