import EmberRouter from '@ember/routing/router';
import config from 'user-data-front-end/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('content', { path: '/content/:content_id' });
  this.route('not-found', { path: '/*path' });
});
