import moment from 'moment';

function secondsToHms(_seconds) {
  return moment().add(_seconds, 's').toNow(true);
}

export default secondsToHms;
