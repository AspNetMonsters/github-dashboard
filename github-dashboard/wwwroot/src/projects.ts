import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Projects {
    projects: Array<Project> = [];
    http;
    
    constructor(http) {
      this.http = http;
    }

    activate() {
      return this.http.fetch('projects')
        .then(response => response.json())
        .then(projects => this.projects = projects);
    }

}

export class Project {
    name: string;
    url: string;
    pullRequests: Array<PullRequest>;

    constructor(name: string, url: string, pullRequests: Array<PullRequest>){
      this.name = name;
      this.url = url;
      this.pullRequests = pullRequests;
    }
}

export class PullRequest{
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
