import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { emInMinute } from '../../config/default.config';

function EventItem({ event, period }) {
  const date = new Date();
  const timeZoneOffset = date.getTimezoneOffset();

  const left = (event.from.diff(period.from, 'm') - timeZoneOffset) * emInMinute;
  const width = event.to.diff(event.from, 'm') * emInMinute;

  return (
    <div
      className={css(styles.Event)}
      style={{ left: `${left}em`, width: `${width}em` }}
    >
      <div className={css(styles.EventLabel)}>
        {`${event.id}: ${event.from.format('HH:mm')} - ${event.to.format('HH:mm')}`}
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  Event: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    background: 'deepskyblue',
    position: 'absolute',
    height: '100%',
    // border: '1px solid #fff',
  },
  EventLabel: {
    //position: 'sticky',
    fontSize: '10px',
    marginLeft: '20px',
  }
});


export default EventItem;
