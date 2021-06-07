import moment from 'moment';
import 'moment/locale/es'; //import required date locales to show date in proper language

export const dateFormatter = (dateString, langCode = 'es') => {
  let fDate = moment(dateString.date).locale('es');
  return fDate.format('LL');
};
