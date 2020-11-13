import type { GTagEvent } from '..';

export const GA_TRACKING_ID: string = 'G-2BDVPMKJHZ';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const registerPageView = (url: URL) => window.gtag('config', GA_TRACKING_ID, { page_path: url });



// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const registerEvent = ({ action, category, label, value }: GTagEvent) => {
  if (process.env.NODE_ENV !== 'development') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};
