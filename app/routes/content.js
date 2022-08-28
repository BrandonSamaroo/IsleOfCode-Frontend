import Route from '@ember/routing/route';

export default class ContentRoute extends Route {
  async model(params) {
    const { content_id } = params;
    const response = await fetch(`/api/content/${content_id}`);
    const { data } = await response.json();
    return data;
  }
}
