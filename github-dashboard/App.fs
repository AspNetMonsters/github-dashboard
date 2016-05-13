

open Suave
open Suave.Filters
open Suave.Operators
open Suave.Writers
open Suave.Successful
open Suave.Files

module entry =

    let router = 
        choose [
            path "/" >=> (OK "Home")
            pathScan "/git/%s" ( fun name -> setHeader "Content-Type" "application/json" >=> GitHub.list(name)  )
            pathRegex "(.*)\.js" >=> Files.browseHome
        ]

    [<EntryPoint>]
    let start(args) = 
        startWebServer defaultConfig router
        0
    
