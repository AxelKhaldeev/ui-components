import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Layout() {
  const { styles } = Layout;

  return (
    <div className={css(styles.calendar)}>
      <div className={css(styles.controls)}>
        CONTROLS
      </div>
      <div className={css(styles.scrollContainer)}>
        <div className={css(styles.main)}>
          <div className={css(styles.utc)}>UTC</div>
          <div className={css(styles.datetime)}>DATETIMES</div>
          {
            [...Array(50)].map(() => (
              <>
                <div className={css(styles.groupTitle)}>group name</div>
                <div className={css(styles.timeLine)}>
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
}

Layout.styles = StyleSheet.create({
  calendar: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    boxShadow: '0px 2px 10px rgba(0,0,0,.25)',
  },

  scrollContainer: {
    height: '100%',
    width: '100%',
    overflow: 'auto',
    display: 'grid',
  },

  main: {
    display: 'grid',
    gridTemplateColumns: '200px auto',
    gridAutoRows: 'auto',
  },

  controls: {
    padding: '20px',
  },

  datetime: {
    position: 'sticky',
    top: 0,
    background: '#f00',
    padding: '20px 0',
  },

  utc: {
    position: 'sticky',
    left: 0,
    top: 0,
    background: 'green',
    zIndex: 10,
    padding: '20px',
  },

  groupTitle: {
    position: 'sticky',
    left: 0,
    background: '#eee',
    padding: '20px',
  },

  timeLine: {
    minHeight: '30px',
    paddingTop: '3px',
    paddingBottom: '3px',
    minWidth: '3000px',
    background: '#fff',
    borderBottom: '1px solid #f5f5f5',
  },
});
