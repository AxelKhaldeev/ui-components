import * as React from 'react';
import { useEffect } from 'react';
import { Dayjs } from 'dayjs';

import { StyleSheet, css } from 'aphrodite';
import DayDate from './DayDate';
import DayTimeLabels from './DayTimeLabels';

import { Scale } from '../../types/types';

type CalendarHeaderProps = {
  scale: Scale,
  period: {
    from: Dayjs,
    to: Dayjs,
    daysBetween: number,
  },
};

function CalendarHeader({ scale, period }: CalendarHeaderProps) {
  const { styles } = CalendarHeader;
  const { from, daysBetween } = period;
  const { minutesBetweenTimeLabels } = scale;

  return (
    [...Array(daysBetween)].map((_, i) => (
      <div className={css(styles.dayHeader)}>
        <DayDate day={from.add(i, 'd')} />
        <DayTimeLabels minutesBetweenTimeLabels={minutesBetweenTimeLabels} />
      </div>
    ))

  );
}

CalendarHeader.styles = StyleSheet.create({
  dayHeader: {
    display: 'block',
    position: 'relative',
  },
});

export default CalendarHeader;
