import getConfig from 'next/config';

import type { GTagEvent } from '..';


const { publicRuntimeConfig } = getConfig();

export const GA_TRACKING_ID: string = 'G-2BDVPMKJHZ';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const registerPageView = (url: URL) => window.gtag('config', GA_TRACKING_ID, { page_path: url });


// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const registerEvent = ({ action, category, label, value }: GTagEvent) => {
  if (!publicRuntimeConfig.isDev) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};
