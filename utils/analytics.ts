import getConfig from 'next/config';
import mixpanel from 'mixpanel-browser';

import { ANALYTICS_EVENTS } from './constants';

const { publicRuntimeConfig } = getConfig();

type Attributes = Record<string, string>;

class Analytics {
  private static _instance: Analytics;

  public static getInstance(): Analytics {
    if (!Analytics._instance) {
      Analytics._instance = new Analytics();
    }

    return this._instance;
  }

  public constructor() {
    if (Analytics._instance) {
      throw new Error('Analytics instance creation is not allowed. Use `getInstance` method');
    }

    mixpanel.init(publicRuntimeConfig.mixpanelProjectToken, {
      debug: publicRuntimeConfig.isDev,
      ignore_dnt: true,
      secure_cookie: true
    });
  }

  private track(name: ANALYTICS_EVENTS, attributes: Attributes = {}): void {
    return mixpanel.track(name, attributes);
  }

  public trackPage(attributes?: Attributes): void {
    return this.trackEvent(ANALYTICS_EVENTS.PAGE_VIEWED, attributes);
  }

  public trackEvent(name: ANALYTICS_EVENTS, attributes: Attributes = {}): void {
    return this.track(name, attributes);
  }

  public optOut(): void {
    return mixpanel.opt_out_tracking();
  }

  public optIn(): void {
    return mixpanel.opt_in_tracking();
  }
}

export default Analytics;
