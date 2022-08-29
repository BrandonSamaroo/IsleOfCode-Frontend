import { helper } from '@ember/component/helper';
import moment from 'moment';

export default helper(function date(date) {
  return moment(...date).format('MM/DD/YYYY/h:mm:ss a"');
});
