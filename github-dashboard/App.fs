namespace dashboard

open Suave
open Suave.Filters
open Suave.Operators
open Suave.Successful
open Suave.Files

module entry =

    let router = 
        choose [
            path "/" >=> (OK "Home")
            path "/git" >=> (GitHub.list)
            pathRegex "(.*)\.js" >=> Files.browseHome
        ]

    [<EntryPoint>]
    let start(args) = 
        startWebServer defaultConfig router
        0
    
