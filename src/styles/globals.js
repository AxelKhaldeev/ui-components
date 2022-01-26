import { StyleSheet } from 'aphrodite/no-important';
import { fonts } from './variables';

const GLOBALS = '__GLOBAL_STYLES__';

const globalExtension = {
  selectorHandler: (selector, baseSelector, generateSubtreeStyles) => (
    baseSelector.includes(GLOBALS) ? generateSubtreeStyles(selector) : null),
};

const extended = StyleSheet.extend([globalExtension]);

const styles = extended.StyleSheet.create({
  [GLOBALS]: {
    body: {
      fontFamily: [fonts.baseFont],
      fontSize: '16px',
      margin: '0',
    },
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      '--test-size': '20px',
    },
  },
});

export default extended.css(styles[GLOBALS]);
