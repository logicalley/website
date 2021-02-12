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
  GA_ACTION_OPEN_LINK_BUTTON_CLICK,
  GA_ACTION_LINKEDIN_LINK_SHARE,
  GA_ACTION_REDDIT_LINK_SHARE,
  GA_ACTION_TWITTER_LINK_SHARE,
  GA_ACTION_FACEBOOK_LINK_SHARE,
  GA_ACTION_WHATSAPP_LINK_SHARE,
  GA_ACTION_EMAIL_LINK_SHARE,
  GA_CATEGORY_TRACK_SHARE_ACTIONS
} from '../../utils/constants';

import TwitterIcon from '../icons/Twitter';
import CopyIcon from '../icons/Copy';
import WhatsappIcon from '../icons/Whatsapp';
import EmailIcon from '../icons/Email';
import FacebookIcon from '../icons/Facebook';
import LinkedInIcon from '../icons/LinkedIn';
import RedditIcon from '../icons/Reddit';
import OpenIcon from '../icons/Open';
import Spacer from '../Spacer';


const PlatformModal: React.FC<PlatformModalProps> = ({artiste, platformName, title, url}: PlatformModalProps) => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const shouldShowCopyLinkButton: boolean = document.queryCommandSupported('copy');
    setShowButton(shouldShowCopyLinkButton);
  }, []);

  const label = `${title} - ${artiste}`;
  const encodedUrl = encodeURI(url);

  const fbAndTwitterShareText = `Here's a song for you ...
  %0a%0a
${title} by ${artiste}.%0a%0a
Shared via @anniemusicapp%0a%0a`;

  const shareText = `Here's a song for you ...
  %0a%0a
${title} by ${artiste}.%0a
${url}
%0a%0a
Shared via @anniemusicapp%0a%0a`;

  const emailSubject = `Listen to ${title} by ${artiste}`;
  const emailShareLink = `mailto:?body=${shareText}&subject=${emailSubject}`;

  const twitterShareLink = `https://twitter.com/intent/tweet?text=${fbAndTwitterShareText}&url=${encodedUrl}`;
  const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&t=${fbAndTwitterShareText}`;
  const linkedInShareLink = `https://www.linkedin.com/shareArticle?mini=true&summary=a&title=${emailSubject}&url=${encodedUrl}`;
  const redditShareLink = `https://reddit.com/submit?url=${encodedUrl}&title=${emailSubject}`;

  const whatsappShareLink = `whatsapp://send?text=${shareText}`;

  const registerLinkCopy = () => {
    let action, analyticsLabel;

    if (platformName === ANNIE_TYPE) {
      action = GA_ACTION_ANNIE_LINK_COPY;
      analyticsLabel = `${GA_ACTION_ANNIE_LINK_COPY}: ${label}`;
    } else if (platformName === SPOTIFY_TYPE) {
      action = GA_ACTION_SPOTIFY_LINK_COPY;
      analyticsLabel = `${GA_ACTION_SPOTIFY_LINK_COPY}: ${label}`;
    } else if (platformName === DEEZER_TYPE) {
      action = GA_ACTION_DEEZER_LINK_COPY;
      analyticsLabel = `${GA_ACTION_DEEZER_LINK_COPY}: ${label}`;
    } else if (platformName === APPLE_MUSIC_TYPE) {
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
    return navigator.clipboard.writeText(url);
  };

  const registerShareLink = (action: string): void => {
    const analyticsLabel = `${action}: ${label} - PLATFORM: ${platformName}`;

    registerEvent({
      action,
      category: GA_CATEGORY_TRACK_SHARE_ACTIONS,
      label: analyticsLabel,
      value: 1
    });
  };

  const sendOpenLinkAnalytics = (): void => {
    const action = GA_ACTION_OPEN_LINK_BUTTON_CLICK;
    registerEvent({
      action,
      category: GA_CATEGORY_TRACK_ACTIONS,
      label: `${action}: ${title} - ${artiste}`,
      value: 1
    });
  };

  const isAnnieLink = platformName === ANNIE_TYPE;

  return (
    <section className={styles.platformModalContainer}>
      <section className={styles.shareModalHeader}>
        <span className={styles.shareModalDescription}>Share to...</span>
      </section>

      <Spacer h="10px" mh="10px" />

      <a href={twitterShareLink} target="_blank" rel="noopener noreferrer" className={styles.shareGroup} onClick={() => registerShareLink(GA_ACTION_TWITTER_LINK_SHARE)}>
        <TwitterIcon />
        <span>Twitter</span>
      </a>

      <a href={facebookShareLink} target="_blank" rel="noopener noreferrer" className={styles.shareGroup} onClick={() => registerShareLink(GA_ACTION_FACEBOOK_LINK_SHARE)}>
        <FacebookIcon />
        <span>Facebook</span>
      </a>

      <a href={linkedInShareLink} target="_blank" rel="noopener noreferrer" className={styles.shareGroup} onClick={() => registerShareLink(GA_ACTION_LINKEDIN_LINK_SHARE)}>
        <LinkedInIcon />
        <span>LinkedIn</span>
      </a>

      <a href={redditShareLink} target="_blank" rel="noopener noreferrer" className={styles.shareGroup} onClick={() => registerShareLink(GA_ACTION_REDDIT_LINK_SHARE)}>
        <RedditIcon />
        <span>Reddit</span>
      </a>

      <a href={whatsappShareLink} target="_blank" rel="noopener noreferrer" className={styles.shareGroup} onClick={() => registerShareLink(GA_ACTION_WHATSAPP_LINK_SHARE)}>
        <WhatsappIcon />
        <span>Whatsapp</span>
      </a>

      <a href={emailShareLink} target="_blank" rel="noopener noreferrer" className={styles.shareGroup} onClick={() => registerShareLink(GA_ACTION_EMAIL_LINK_SHARE)}>
        <EmailIcon />
        <span>Email</span>
      </a>

      {showButton ? (
        <button className={styles.copyLinkBtn} onClick={copyLink}>
          <CopyIcon />
          <span>Copy Link</span>
        </button>
      ) : null}

      {isAnnieLink ? null : (
        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.shareGroup}
           onClick={sendOpenLinkAnalytics}>
          <OpenIcon/>
          <span>Open Link</span>
        </a>
      )}
    </section>
  );
};

export default PlatformModal;
