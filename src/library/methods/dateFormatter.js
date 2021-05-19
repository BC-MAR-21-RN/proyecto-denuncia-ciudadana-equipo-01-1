import moment from 'moment';
import 'moment/locale/es'; //import required date locales to show date in proper language

export const dateFormatter = (dateVariable, langCode = 'es') => {
  let date = moment(dateVariable).locale('es');
  console.log(date.format('LL'));
  return date.format('LL');
};
