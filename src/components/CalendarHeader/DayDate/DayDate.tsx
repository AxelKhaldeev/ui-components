import * as React from 'react';
import { useRef } from 'react';
import { Dayjs } from 'dayjs';
import { StyleSheet, css } from 'aphrodite';

type DayDateProps = {
  day: Dayjs,
};

function DayDate({ day }: DayDateProps) {
  const { styles } = DayDate;
  const dateRef = useRef();

  return (
    <div className={css(styles.dateWrap)}>
      <div className={css(styles.dateLabel)} ref={dateRef}>
        {day.format('DD.MM.YYYY, dddd')}
      </div>
    </div>
  );
}

DayDate.styles = StyleSheet.create({
  dateWrap: {
    display: 'flex',
    alignItems: 'center',
    zIndex: 5,
    background: '#fff',
  },
  dateLabel: {
    display: 'flex',
    fontSize: 'var(--test-size)',
    fontWeight: 'bold',
    position: 'sticky',
    left: '200px',
  },
});

export default DayDate;
