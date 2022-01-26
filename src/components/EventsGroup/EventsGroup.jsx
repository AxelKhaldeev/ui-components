import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Event from '../Event';
import { emInDay } from '../../config/default.config';

export default function EventsGroup({ period, events }) {
  const { daysBetween } = period;
  return (
    <div className={css(styles.Group)} style={{ width: `${daysBetween * emInDay}em` }}>
      <div className={css(styles.GroupName)}>GROUP</div>
      <div className={css(styles.TimeLines)}>
        {
          Object.keys(events).map((line) => (
            <div className={css(styles.TimeLine)}>
              {
                events[line].map((event) => (
                  <Event event={event} period={period} key={event.id} />
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  Group: {
    display: 'flex',
    borderBottom: '1px solid #eee',
  },
  TimeLines: {
    display: 'block',
  },
  TimeLine: {
    display: 'flex',
    height: '30px',
    marginTop: '3px',
    marginBottom: '3px',
    position: 'relative',
  },
  GroupName: {
    display: 'flex',
    position: 'sticky',
    left: 0,
    background: '#fff',
    zIndex: 3,
    width: '200px',
  },
});
