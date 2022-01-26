import React, { useState, useCallback } from 'react';
import { hot } from 'react-hot-loader';
import { StyleSheet, css } from 'aphrodite';
import Calendar from './components/Calendar';
import ZoomInIcon from './assets/icons/zoom-in.svg';
import ZoomOutIcon from './assets/icons/zoom-out.svg';

import { config } from './config/default.config';

const App = () => {
  const { scales } = config;

  const [scaleIndex, setScaleIndex] = useState(() => scales.findIndex((el) => el.zoom === 100));
  const currentScale = scales[scaleIndex];

  const handleScaleIndexChange = (factor) => {
    const newScaleIndex = scaleIndex + 1 * factor;
    if (newScaleIndex >= 0 && newScaleIndex < scales.length) {
      setScaleIndex(newScaleIndex);
    }
  };

  return (
    <>
      <div style={{ height: '500px', padding: '10px' }}>
        <Calendar scale={currentScale} />
      </div>



      <div className={css(styles.ZoomControls)}>
        <div onClick={() => handleScaleIndexChange(-1)}>
          <ZoomOutIcon />
        </div>
        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
          {`${currentScale.title} / ${currentScale.zoom}%`}
        </div>
        <div onClick={() => handleScaleIndexChange(1)}>
          <ZoomInIcon />
        </div>
      </div>
    </>
  );
};

const styles = StyleSheet.create({
  ZoomControls: {
    display: 'flex',
    marginBottom: '10px',
  },
});

export default hot(module)(App);
