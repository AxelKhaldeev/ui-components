export const pixelsInEm: number = 16;
export const emInMinute: number = 0.1;
export const emInHour: number = emInMinute * 60;
export const emInHalfHour: number = emInHour / 2;
export const emInDay: number = emInHour * 24;

export const config = {
  pixelsInEm,
  emInMinute,
  emInHour,
  emInHalfHour,
  emInDay,

  scales: [
    { title: '120min', zoom: 25, minutesBetweenTimeLabels: 120 },
    { title: '60min', zoom: 50, minutesBetweenTimeLabels: 60 },
    { title: '30min', zoom: 100, minutesBetweenTimeLabels: 30 },
    { title: '15min', zoom: 200, minutesBetweenTimeLabels: 15 },
    { title: '5min', zoom: 600, minutesBetweenTimeLabels: 5 },
    // { title: '1min', zoom: 3000, minutesBetweenTimeLabels: 1 },
  ],
};
