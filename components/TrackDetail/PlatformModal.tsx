import React, { useState, useEffect } from 'react';

import styles from './styles.module.css';
import type { PlatformModalProps } from '../..';
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
  APPLE_MUSIC_TYPE,
  GA_ACTION_OPEN_LINK_BUTTON_CLICK
} from '../../utils/constants';

import TwitterIcon from '../icons/Twitter';
import CopyIcon from '../icons/Copy';
import WhatsappIcon from '../icons/Whatsapp';
import EmailIcon from "../icons/Email";
import OpenIcon from "../icons/Open";
import Spacer from '../Spacer';


const PlatformModal: React.FC<PlatformModalProps> = (props: PlatformModalProps) => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const shouldShowCopyLinkButton: boolean = document.queryCommandSupported('copy');
    setShowButton(shouldShowCopyLinkButton);
  }, []);

  const label = `${props.title} - ${props.artiste}`;
  const encodedUrl = encodeURI(props.url);

  const twitterShareText = `Here's a song for you ...
  %0a%0a
${props.title} by ${props.artiste}.%0a%0a
Shared via @anniemusicapp%0a%0a`;

  const shareText = `Here's a song for you ...
  %0a%0a
${props.title} by ${props.artiste}.%0a
${props.url}
%0a%0a
Shared via @anniemusicapp%0a%0a`;
  const twitterShareLink = `https://twitter.com/intent/tweet?text=${twitterShareText}&url=${encodedUrl}`;

  const emailSubject = `Listen to ${props.title} by ${props.artiste}`
  const emailShareLink = `mailto:?body=${shareText}&subject=${emailSubject}`;

  const whatsappShareLink = `whatsapp://send?text=${shareText}`;

  const registerLinkCopy = () => {
    let action, analyticsLabel;

    if (props.platformName === ANNIE_TYPE) {
      action = GA_ACTION_ANNIE_LINK_COPY;
      analyticsLabel = `${GA_ACTION_ANNIE_LINK_COPY}: ${label}`;
    } else if (props.platformName === SPOTIFY_TYPE) {
      action = GA_ACTION_SPOTIFY_LINK_COPY;
      analyticsLabel = `${GA_ACTION_SPOTIFY_LINK_COPY}: ${label}`;
    } else if (props.platformName === DEEZER_TYPE) {
      action = GA_ACTION_DEEZER_LINK_COPY;
      analyticsLabel = `${GA_ACTION_DEEZER_LINK_COPY}: ${label}`;
    } else if (props.platformName === APPLE_MUSIC_TYPE) {
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
  };

  const copyLink = (): Promise<void> => {
    registerLinkCopy();
    return navigator.clipboard.writeText(props.url);
  };

  const sendOpenLinkAnalytics = (): void => {
    const action = GA_ACTION_OPEN_LINK_BUTTON_CLICK;
    registerEvent({
      action,
      category: GA_CATEGORY_TRACK_ACTIONS,
      label: `${action}: ${props.title} - ${props.artiste}`,
      value: 1
    });
  }

  return (
    <section className={styles.platformModalContainer}>
      <section className={styles.shareModalHeader}>
        <span className={styles.shareModalDescription}>Share to...</span>
      </section>

      <Spacer h="10px" mh="10px" />

      <a href={twitterShareLink} target="_blank" rel="noopener noreferrer" className={styles.shareGroup}>
        <TwitterIcon />
        <span>Twitter</span>
      </a>

      <a href={whatsappShareLink} target="_blank" rel="noopener noreferrer" className={styles.shareGroup}>
        <WhatsappIcon />
        <span>Whatsapp</span>
      </a>

      <a href={emailShareLink} target="_blank" rel="noopener noreferrer" className={styles.shareGroup}>
        <EmailIcon />
        <span>Email</span>
      </a>

      {showButton ? (
        <button className={styles.copyLinkBtn} onClick={copyLink}>
          <CopyIcon />
          <span>Copy Link</span>
        </button>
      ) : null}

      <a href={props.url} target="_blank" rel="noopener noreferrer" className={styles.shareGroup} onClick={sendOpenLinkAnalytics}>
        <OpenIcon />
        <span>Open Link</span>
      </a>
    </section>
  );
};

export default PlatformModal;
