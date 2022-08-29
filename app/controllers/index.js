import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @tracked info = {
    content_title: '',
    publishing_user: '',
  };
  @action
  async changeInfo(id) {
    const jsonData = await fetch(`/api/content/${id}`);
    const { data } = await jsonData.json();
    this.info = data;
  }
}
