import { module, test } from 'qunit';
import { setupTest } from 'user-data-front-end/tests/helpers';

module('Unit | Route | content', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:content');
    assert.ok(route);
  });
});
