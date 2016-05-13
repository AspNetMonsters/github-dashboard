import {HttpClient} from 'aurelia-fetch-client';
import {Project}    from './projects';
import {PullRequest}    from './projects';

export function configure(aurelia) {
   aurelia.use
   .standardConfiguration()
   .defaultBindingLanguage()
   .defaultResources()
   .developmentLogging()
   .router()
   .history()
   .eventAggregator();
   
   configureContainer(aurelia.container);

   aurelia.start().then(() => aurelia.setRoot('app', document.body));
}


let httpMock = {
  fetch: url => Promise.resolve({
    json: () => mockProjects
  })
};

function configureContainer(container) {      
  container.registerInstance(HttpClient, httpMock);
}
// #if PROD
// function configureContainer(container) {
//   let http = new HttpClient();
//   http.configure(config => {
//     config
//       .useStandardConfiguration()
//       .withBaseUrl('https://api.github.com/');//TODO:
//   });
//   container.registerInstance(HttpClient, http);
// }

let mockProjects = [
  new Project("Service Layer","http://testurl.com",[
    new PullRequest(1,"Rebase the thing","http://timhortons.ca"),
    new PullRequest(2,"Becuase we love dilly bars","http://dairyqueen.com")]
  ),
  new Project("Processing Layer","http://othertesturl.com",[
    new PullRequest(3,"Trump for president","http://two-testcycle.com"),
    new PullRequest(4,"Why is it so cold here in the northernmost state (Canada)?","http://testurl.ca")]
  )
];