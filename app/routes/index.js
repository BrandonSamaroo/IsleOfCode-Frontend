import Route from '@ember/routing/route';

// let data = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('/api/content');
    const { data } = await response.json();
    return data;
  }
}
