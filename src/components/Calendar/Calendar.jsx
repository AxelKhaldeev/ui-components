import React, { useEffect, useCallback, useLayoutEffect, useRef } from 'react';
import { StyleSheet, css } from 'aphrodite';
import dayjs from 'dayjs';
import CalendarHeader from '../CalendarHeader';
// import CalendarControls from '../CalendarControls';

// import EventsGroup from '../EventsGroup';
import { zoomToFontSize } from '../../helpers/helpers';

import { events } from './data';

const eventsDOM = (ev) => {
  const eventsDateSorted = ev.sort((a, b) => a.from.unix() - b.from.unix());

  let lineCounter = 1;
  let lastPushedEventId = null;
  const eventsLineSorted = {};
  eventsLineSorted[`${lineCounter}`] ||= [eventsDateSorted[0]];
  eventsDateSorted.forEach((event, i) => {
    [...Array(lineCounter)].forEach((_, i) => {
      const lineLastEvent = eventsLineSorted[`${i+1}`].slice(-1)[0];
      if (lineLastEvent.id !== event.id && event.id !== lastPushedEventId) {
        const lineLastEventEnd = lineLastEvent.to.unix();
        const currentEventStart = event.from.unix();
        if (currentEventStart >= lineLastEventEnd) {
          eventsLineSorted[`${i+1}`].push(event);
          lastPushedEventId = event.id;
        } else if (i + 1 == lineCounter) {
          lineCounter += 1;
          eventsLineSorted[`${lineCounter}`] ||= [event];
        }
      }
    });
  });

  return eventsLineSorted;
};

const from = dayjs('2020-02-01T00:00:00.000Z');
const to = dayjs('2020-02-10T23:59:59.999Z');
const daysBetween = to.diff(from, 'd') + 1;

const period = {
  from,
  to,
  daysBetween,
};

export default function Calendar({ scale }) {
  const { styles } = Calendar;
  const scrollContainerRef = useRef();

  return (
    <div className={css(styles.calendar)}>
      {/* <div className={css(styles.controls)}> */}
        {/* <CalendarControls /> */}
      {/* </div> */}

      <div ref={scrollContainerRef} className={css(styles.scrollContainer)}>
        <div
          className={css(styles.layout)}
          style={{ fontSize: zoomToFontSize(scale.zoom) }}
        >
          <div className={css(styles.corner)}>
            <span className={css(styles.utcLabel)}>UTC</span>
          </div>

          <div className={css(styles.header)}>
            <CalendarHeader scale={scale} period={period} />
          </div>

          {
            [...Array(50)].map(() => (
              <>
                <div className={css(styles.groupTitle)}>group name</div>
                <div className={css(styles.groupTrack)}>
                  timeline
                  <br />
                  timeline2
                </div>
              </>
            ))
          }
        </div>
      </div>
    </div>
  );
  // {
  //   Object.entries(events).map(([group, groupEvents]) => {
  //     const evs = eventsDOM(groupEvents);
  //     return (
  //       <EventsGroup period={period} events={evs} key={group} />
  //     );
  //   })
  // }
}

Calendar.styles = StyleSheet.create({
  calendar: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    boxShadow: '0px 2px 10px rgba(0,0,0,.25)',
  },

  controls: {
    padding: '20px',
  },

  scrollContainer: {
    height: '100%',
    width: '100%',
    overflow: 'auto',
    display: 'grid',
    position: 'relative',
  },

  layout: {
    display: 'grid',
    gridTemplateColumns: 'minmax(max-content, 170px) auto',
    gridAutoRows: 'auto',
  },

  corner: {
    position: 'sticky',
    display: 'flex',
    left: 0,
    top: 0,
    background: 'green',
    zIndex: 10,
  },

  header: {
    display: 'flex',
    position: 'sticky',
    top: 0,
    background: '#f00',
    padding: '20px 0',
  },

  utcLabel: {
    padding: '20px 0',
  },

  groupTitle: {
    position: 'sticky',
    left: 0,
    background: '#fff',
    padding: '20px',
    borderBottom: '1px solid #f5f5f5',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },

  groupTrack: {
    minHeight: '30px',
    paddingTop: '3px',
    paddingBottom: '3px',
    minWidth: '3000px',
    borderBottom: '1px solid #f5f5f5',
  },
});
