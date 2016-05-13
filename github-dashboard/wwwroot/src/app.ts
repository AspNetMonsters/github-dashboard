import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'GitBoard - The Dashboard GitHub is Missing';
    config.map([
      { route: ['','welcome'], name: 'welcome', moduleId: './welcome', nav: true, title:'Welcome' },
      { route: 'projects', name: 'projects', moduleId: './projects', nav: true, title:'Projects' },
    ]);

    this.router = router;
  }
}