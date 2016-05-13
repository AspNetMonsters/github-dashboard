
export class Projects {
    
    projects: Array<Project> = [ new Project(), new Project()];
    
}

class Project {

    name: string = "Service Layer";
    url: string = "https://github.com/MarletteFunding/service-layer";
    pullRequests: Array<PullRequest> = [
        new PullRequest(172, "Add even more logging - my god we love logging", "https://github.com/MarletteFunding/service-layer/pull/172"),
        new PullRequest(178, "For Simon to rebase", "https://github.com/MarletteFunding/service-layer/pull/178"),
        ];

}

class PullRequest{
    id: number;
    name: string;
    url: string;
    constructor(id: number, name: string, url: string)
    {
        this.id = id;
        this.name = name;
        this.url = url;
    }
    
}