import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

const minutesToFormatHHmm = (min) => {
  dayjs.extend(duration);
  const hours = Math.floor(min / 60);
  const minutes = Math.round((min / 60 - hours) * 60);

  return dayjs.duration({
    hours,
    minutes,
  }).format('HH:mm');
};

const minutesInDay = 24 * 60;

export {
  minutesToFormatHHmm,
  minutesInDay,
};
