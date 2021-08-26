import React, { useState, useEffect, memo } from 'react';
import { useCookie } from 'next-cookie';

import styles from './styles.module.css';

import type { ClonePlaylistProps } from '../..';
import {
  FetchStatus,
  ANNIE_USER_TOKEN_KEY,
  ANNIE_USER_PLATFORM_TOKEN
} from '../../utils/constants';
import Spinner from '../Spinner';
import CircleSpinner from '../Spinner/CircleSpinner';
import SelectPlatform from './SelectPlatform';
import CloneSuccess from './CloneSuccess';
import CloneFailure from './CloneFailure';


const ClonePlaylist: React.FC<ClonePlaylistProps> = (props: ClonePlaylistProps) => {
  const cookie = useCookie();
  const [fetchState, setFetchState] = useState<FetchStatus>(FetchStatus.IDLE);

  useEffect(() => {
    const userPlatform = cookie.get(ANNIE_USER_PLATFORM_TOKEN);
    const userToken = cookie.get(ANNIE_USER_TOKEN_KEY);
  }, []); // do some funny meandering here to check token and see if valid
  // TODO: check for token stuff on first load.

  const { playlistId } = props;

  if (fetchState === FetchStatus.LOADING) {
    return <CircleSpinner />;
  }

  if (fetchState === FetchStatus.SUCCESS) {
    return <CloneSuccess />;
  }

  if (fetchState === FetchStatus.ERROR) {
    return <CloneFailure />;
  }

  return <SelectPlatform />;
};

export default memo(ClonePlaylist);
