import dayjs from 'dayjs';

export const formatDate = (date: string) => {
  if (date === 'current') return date;
  return dayjs(date).format('MMM YYYY');
};
