import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { minutesToFormatHHmm } from '../../../helpers/dates';

type TimeLabelProps = {
  minutes: number,
  width: number,
};

function TimeLabel({ minutes, width }: TimeLabelProps) {
  const { styles } = TimeLabel;

  const isHour: boolean = minutes % 60 === 0;
  const wrapClassName: string = css(
    styles.TimeLabelWrap,
    isHour && styles.TimeLabelWrap_hour,
  );

  const labelClassName: string = css(
    styles.TimeLabel,
    isHour && styles.TimeLabel_hour,
  );

  return (
    <div className={wrapClassName} style={{ width: `${width}em` }}>
      <div className={labelClassName}>
        {minutesToFormatHHmm(minutes)}
      </div>
    </div>
  );
}

TimeLabel.styles = StyleSheet.create({
  TimeLabelWrap: {
    ':after': {
      content: '""',
      position: 'absolute',
      display: 'flex',
      height: '100vh',
      // bottom: 0,
      borderRight: '1px solid #eee',
    },
  },

  TimeLabelWrap_hour: {
    ':after': {
      borderRightColor: '#999',
    },
  },

  TimeLabel: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    left: '-50%',
    zIndex: 2,
    background: '#fff',
    fontSize: '12px',
    color: '#aaa',
  },

  TimeLabel_hour: {
    fontSize: '14px',
    color: '#222',
  },
});

export default TimeLabel;
