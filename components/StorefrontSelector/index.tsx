import React, {memo, useEffect, useState} from 'react';
import getConfig from 'next/config';
import Select from 'react-select';

import SimpleSpinner from '../Spinner/simple';

import type { SelectableStorefront, Storefront, StorefrontSelectorProps } from '../..';
import { ANALYTICS_EVENTS, ANNIE_USER_SELECTED_STOREFRONT_KEY, FetchStatus } from '../../utils/constants';
import Analytics from '../../utils/analytics';


const { publicRuntimeConfig } = getConfig();

const StorefrontSelector: React.FC<StorefrontSelectorProps> = (props: StorefrontSelectorProps) => {
  const { userStorefront, setUserStorefront } = props;
  const [storefrontData, setStorefrontData] = useState<SelectableStorefront[]>([]);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>(FetchStatus.IDLE);

  useEffect(() => {
    fetchStorefrontData();
  }, []);

  const fetchStorefrontData = async () => {
    setFetchStatus(FetchStatus.LOADING);

    try {
      const storefrontEndpoint: string = `${publicRuntimeConfig.apiBaseUrl}/storefront`;
      const res = await fetch(storefrontEndpoint);
      const { data } = await res.json();

      const formattedStorefrontData = data.map(({ id, name }: Storefront) => ({ value: id, label: name }));
      setStorefrontData(formattedStorefrontData);
      setFetchStatus(FetchStatus.SUCCESS);
    } catch (error) {
      console.error(error);
      setFetchStatus(FetchStatus.ERROR);
    }
  };

  if (fetchStatus === FetchStatus.LOADING) {
    return <SimpleSpinner />;
  }

  if (fetchStatus === FetchStatus.ERROR) {
    return <span>An error occured while fetching storefront data. Please refresh this page.</span>;
  }

  const selectProps: any = {
    options: storefrontData,
    onChange: (payload: any): void => {
      Analytics.getInstance().trackEvent(ANALYTICS_EVENTS.STORE_FRONT_SELECT, {
        storefront: payload.label,
        identifier: payload.value
      });

      localStorage.setItem(ANNIE_USER_SELECTED_STOREFRONT_KEY, JSON.stringify(payload));
      setUserStorefront(payload as SelectableStorefront);
    }
  };

  if (userStorefront) {
    selectProps.defaultValue = userStorefront
  }

  return <Select {...selectProps} />;
};

export default memo(StorefrontSelector);
