import moment from 'moment';

export const validateExpiryDate = (mmYY: string) => {
  const date = moment(mmYY, 'MM/YY');
  return date.isAfter(moment());
};
