import React, { useState, useEffect } from 'react';

import styles from './styles.module.css';

import type { CopyLinkButtonProps } from '../..';

import { registerEvent } from '../../utils/googleAnalytics';
import {
  GA_ACTION_ANNIE_LINK_COPY,
  GA_ACTION_DEEZER_LINK_COPY,
  GA_ACTION_APPLE_MUSIC_LINK_COPY,
  GA_ACTION_SPOTIFY_LINK_COPY,
  GA_CATEGORY_TRACK_ACTIONS,
  ANNIE_TYPE,
  SPOTIFY_TYPE,
  DEEZER_TYPE,
  APPLE_MUSIC_TYPE
} from '../../utils/constants';


const CopyLinkButton: React.FC<CopyLinkButtonProps> = ({ link, label, platform }: CopyLinkButtonProps) => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const shouldShowCopyLinkButton: boolean = document.queryCommandSupported('copy');
    setShowButton(shouldShowCopyLinkButton);
  }, []);

  const registerLinkCopy = () => {
    let action, analyticsLabel;

    if (platform === ANNIE_TYPE) {
      action = GA_ACTION_ANNIE_LINK_COPY;
      analyticsLabel = `${GA_ACTION_ANNIE_LINK_COPY}: ${label}`;
    } else if (platform === SPOTIFY_TYPE) {
      action = GA_ACTION_SPOTIFY_LINK_COPY;
      analyticsLabel = `${GA_ACTION_SPOTIFY_LINK_COPY}: ${label}`;
    } else if (platform === DEEZER_TYPE) {
      action = GA_ACTION_DEEZER_LINK_COPY;
      analyticsLabel = `${GA_ACTION_DEEZER_LINK_COPY}: ${label}`;
    } else if (platform === APPLE_MUSIC_TYPE) {
      action = GA_ACTION_APPLE_MUSIC_LINK_COPY;
      analyticsLabel = `${GA_ACTION_APPLE_MUSIC_LINK_COPY}: ${label}`;
    } else {
      action = 'UNKNOWN_PLATFORM_LINK_CLICKED';
      analyticsLabel = `${action}: ${label}`;
    }

    registerEvent({
      action,
      category: GA_CATEGORY_TRACK_ACTIONS,
      label: analyticsLabel,
      value: 1
    });
  }

  const copyLink = (): Promise<void> => {
    registerLinkCopy();
    return navigator.clipboard.writeText(link);
  }

  return showButton ? (
    <button className={styles.copyLinkBtn} onClick={copyLink}>
      Copy Link
    </button>
  ) : null;
};

export default CopyLinkButton;
