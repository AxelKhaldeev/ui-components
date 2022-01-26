import { config } from '../config/default.config';

export const zoomToFontSize = (zoom) => config.pixelsInEm * zoom / 100;