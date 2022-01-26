import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';
import * as dayjs from 'dayjs';

import ScaleControl from './ScaleControl';

function CalendarControls() {
  const { styles } = CalendarControls;
  return (
    <div className={css(styles.Controls)}>
      <ScaleControl />
    </div>
  );
}

CalendarControls.styles = StyleSheet.create({
  Controls: {
    padding: '10px 20px',
    border: '1px solid #999',
  },
});

export default CalendarControls;
