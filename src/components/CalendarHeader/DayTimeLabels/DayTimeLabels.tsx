import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import TimeLabel from '../TimeLabel';
import { emInMinute } from '../../../config/default.config';
import { minutesInDay } from '../../../helpers/dates';

type DayTimeLabelsProps = {
  minutesBetweenTimeLabels: number,
};

function DayTimeLabels({ minutesBetweenTimeLabels }: DayTimeLabelsProps) {
  const { styles } = DayTimeLabels;
  const labelsAmount: number = minutesInDay / minutesBetweenTimeLabels;
  const labelWidth: number = minutesBetweenTimeLabels * emInMinute;

  return (
    <div className={css(styles.DayTimeLabels)}>
      {
        [...Array(labelsAmount)].map((_, i) => {
          const minutes: number = i * minutesBetweenTimeLabels;
          if (minutes % minutesBetweenTimeLabels === 0) {
            return <TimeLabel minutes={minutes} width={labelWidth} key={minutes} />;
          }
          return null;
        })
      }
    </div>
  );
}

DayTimeLabels.styles = StyleSheet.create({
  DayTimeLabels: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default DayTimeLabels;
