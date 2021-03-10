import React, { useState, useEffect, Fragment } from 'react';
import toast from 'react-hot-toast';

import styles from './styles.module.css';
import type { PlatformModalProps, SelectableStorefront } from '../..';
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
  GA_ACTION_TWITTER_LINK_SHARE,
  GA_ACTION_FACEBOOK_LINK_SHARE,
  GA_ACTION_WHATSAPP_LINK_SHARE,
  GA_ACTION_EMAIL_LINK_SHARE,
  GA_CATEGORY_TRACK_SHARE_ACTIONS, ANNIE_USER_SELECTED_STOREFRONT_KEY
} from '../../utils/constants';

import TwitterIcon from '../icons/Twitter';
import CopyIcon from '../icons/Copy';
import WhatsappIcon from '../icons/Whatsapp';
import EmailIcon from '../icons/Email';
import FacebookIcon from '../icons/Facebook';
import LinkedInIcon from '../icons/LinkedIn';
import RedditIcon from '../icons/Reddit';
import OpenIcon from '../icons/Open';
import CloseIcon from '../icons/Close';

import StorefrontSelector from '../StorefrontSelector';
import Spacer from '../Spacer';


const PlatformModal: React.FC<PlatformModalProps> = (props: PlatformModalProps) => {
  const { artiste, platformName, title, url, closeFn, shortUrl } = props;

  const [showButton, setShowButton] = useState<boolean>(false);
  const [userStorefront, setUserStorefront] = useState<SelectableStorefront>();
  const [fetchedStorefront, setFetchedStorefront] = useState<boolean>(false);
  const [editStorefront, setEditStorefront] = useState<boolean>(false);
  const appleMusicBaseUrl: string = 'https://music.apple.com';

  const isAnnieLink = platformName === ANNIE_TYPE;
  const isAppleLink = platformName === APPLE_MUSIC_TYPE;

  const storefrontUsable: boolean = isAppleLink && Boolean(shortUrl) && Boolean(userStorefront);
  const trackUrl: string = storefrontUsable ? `${appleMusicBaseUrl}/${userStorefront?.value}${shortUrl}` : url;

  useEffect(() => {
    const shouldShowCopyLinkButton: boolean = document.queryCommandSupported('copy');
    setShowButton(shouldShowCopyLinkButton);
  }, []);

  useEffect(() => {
    if (process.browser) {
      const selectedStorefront: string | null = localStorage.getItem(ANNIE_USER_SELECTED_STOREFRONT_KEY);

      if (selectedStorefront) {
        const parsedSelectedStorefront: SelectableStorefront = JSON.parse(selectedStorefront);
        setUserStorefront(parsedSelectedStorefront);
      }

      setFetchedStorefront(true);
    }
  }, []);

  const label = `${title} - ${artiste}`;
  const encodedUrl = encodeURI(trackUrl);

  const shareText = `Check out ${title} by ${artiste}.%0a
${trackUrl}
%0a%0a`;

const twitterShareText = `Check out ${title} by ${artiste}.%0a
Shared via @anniemusicapp%0a%0a`;

  const twitterShareLink = `https://twitter.com/intent/tweet?text=${twitterShareText}&url=${encodedUrl}`;
  const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&t=${shareText}`;

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
    let status: string;

    return navigator.clipboard.writeText(trackUrl)
      .then(() => {
        status = 'success';
        registerLinkCopy();
      })
      .catch(() => {
        status = 'failure';
      })
      .finally(() => {
        const isSuccess = status === 'success';
        const toastFn = isSuccess ? toast.success : toast.error;
        const toastMessage = isSuccess ? 'Link Copied.' : 'Failed to copy link.';
        toastFn(toastMessage);
      })
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

  const confirmUserStorefront = (data: SelectableStorefront) => {
    setUserStorefront((data));
    setEditStorefront(false);
  };

  const toggleDisplayStorefrontSelector = () => setEditStorefront((prevState) => !prevState);

  const renderStoreFront = (): JSX.Element => {
    if (isAppleLink && fetchedStorefront) {
      if (editStorefront) {
        return <StorefrontSelector setUserStorefront={confirmUserStorefront} userStorefront={userStorefront} />;
      }

      if (userStorefront) {
        return (
          <section className={styles.storefrontTextContainer}>
            <span className={styles.storefrontText}>Selected Storefront: <span className={styles.storefrontLabel}>{userStorefront?.label}</span></span>
            <button className={styles.storefrontTextBtn} onClick={toggleDisplayStorefrontSelector}>Change Storefront</button>
          </section>
        );
      }
    }

    return <span />;
  };

  const renderShareOptions = (): JSX.Element => (
    <Fragment>
      {isAnnieLink ? null : (
        <a href={trackUrl} target="_blank" rel="noopener noreferrer" className={styles.shareGroup}
           onClick={sendOpenLinkAnalytics}>
          <OpenIcon/>
          <span>Open Link</span>
        </a>
      )}

      {showButton ? (
        <button className={styles.copyLinkBtn} onClick={copyLink}>
          <CopyIcon />
          <span>Copy Link</span>
        </button>
      ) : null}

      <a href={twitterShareLink} target="_blank" rel="noopener noreferrer" className={styles.shareGroup} onClick={() => registerShareLink(GA_ACTION_TWITTER_LINK_SHARE)}>
        <TwitterIcon />
        <span>Twitter</span>
      </a>

      <a href={facebookShareLink} target="_blank" rel="noopener noreferrer" className={styles.shareGroup} onClick={() => registerShareLink(GA_ACTION_FACEBOOK_LINK_SHARE)}>
        <FacebookIcon />
        <span>Facebook</span>
      </a>

      <a href={whatsappShareLink} target="_blank" rel="noopener noreferrer" className={styles.shareGroup} onClick={() => registerShareLink(GA_ACTION_WHATSAPP_LINK_SHARE)}>
        <WhatsappIcon />
        <span>Whatsapp</span>
      </a>
    </Fragment>
  );

  const isLoadedNoSelectedUserStorefront = isAppleLink && fetchedStorefront && (!userStorefront);

  return (
    <section className={styles.platformModalContainer}>
      <section className={styles.shareModalHeader}>
        <span className={styles.shareModalDescription}>Share to...</span>
        <button className={styles.closeIconBtn} onClick={closeFn}>
          <CloseIcon />
        </button>
      </section>

      <Spacer h="10px" mh="10px" />

      {
        isLoadedNoSelectedUserStorefront ? (
          <Fragment>
            <p>
              Apple Music requires users to select a storefront which corresponds to their home location or the country
              selected when creating their apple account.
            </p>
            <p>This is used to generate the apple music link for the song requested.</p>
            <StorefrontSelector setUserStorefront={confirmUserStorefront} userStorefront={userStorefront} />
          </Fragment>
        ) : (
          <Fragment>
            {renderStoreFront()}
            {renderShareOptions()}
          </Fragment>
        )
      }




    </section>
  );
};

export default PlatformModal;
