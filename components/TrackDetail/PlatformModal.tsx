import React, { useState, useEffect, Fragment } from 'react';

import styles from './styles.module.css';
import type { PlatformModalProps, SelectableStorefront } from '../..';
import {
  ShareablePlatforms,
  ANNIE_TYPE,
  APPLE_MUSIC_TYPE,
  GA_ACTION_TWITTER_LINK_SHARE,
  GA_ACTION_FACEBOOK_LINK_SHARE,
  GA_ACTION_WHATSAPP_LINK_SHARE,
  ANNIE_USER_SELECTED_STOREFRONT_KEY,
  ANALYTICS_EVENTS,
} from '../../utils/constants';

import TwitterIcon from '../icons/Twitter';
import CopyIcon from '../icons/Copy';
import WhatsappIcon from '../icons/Whatsapp';
import FacebookIcon from '../icons/Facebook';
import OpenIcon from '../icons/Open';

import StorefrontSelector from '../StorefrontSelector';
import Spacer from '../Spacer';
import copyLink from '../../utils/copyLink';
import Analytics from '../../utils/analytics';

const PlatformModal: React.FC<PlatformModalProps> = (
  props: PlatformModalProps
) => {
  const { artiste, platformName, title, url, closeFn, shortUrl } = props;

  const [showButton, setShowButton] = useState<boolean>(false);
  const [userStorefront, setUserStorefront] = useState<SelectableStorefront>();
  const [fetchedStorefront, setFetchedStorefront] = useState<boolean>(false);
  const [editStorefront, setEditStorefront] = useState<boolean>(false);
  const appleMusicBaseUrl: string = 'https://music.apple.com';

  const isAnnieLink = platformName === ANNIE_TYPE;
  const isAppleLink = platformName === APPLE_MUSIC_TYPE;

  const storefrontUsable: boolean =
    isAppleLink && Boolean(shortUrl) && Boolean(userStorefront);
  const trackUrl: string = storefrontUsable
    ? `${appleMusicBaseUrl}/${userStorefront?.value}${shortUrl}`
    : url;

  useEffect(() => {
    const shouldShowCopyLinkButton: boolean =
      document.queryCommandSupported('copy');
    setShowButton(shouldShowCopyLinkButton);
  }, []);

  useEffect(() => {
    if (process.browser) {
      const selectedStorefront: string | null = localStorage.getItem(
        ANNIE_USER_SELECTED_STOREFRONT_KEY
      );

      if (selectedStorefront) {
        const parsedSelectedStorefront: SelectableStorefront =
          JSON.parse(selectedStorefront);
        setUserStorefront(parsedSelectedStorefront);
      }

      setFetchedStorefront(true);
    }
  }, []);

  const label = `${title} - ${artiste}`;
  const encodedUrl = encodeURI(trackUrl);

  const shareText = `Check out "${title}" by ${artiste}.%0a
${trackUrl}
%0a%0a`;

  const twitterShareText = `Check out "${title}" by ${artiste}.%0a
Shared via @anniemusicapp%0a%0a`;

  const twitterShareLink = `https://twitter.com/intent/tweet?text=${twitterShareText}&url=${encodedUrl}&hashtags=ShareWithAnnie`;
  const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&t=${shareText}`;

  const whatsappShareLink = `whatsapp://send?text=${shareText}`;

  const registerLinkCopy = () => {
    Analytics.getInstance().trackEvent(ANALYTICS_EVENTS.LINK_COPIED, {
      title,
      artiste,
      platform: platformName.toUpperCase()
    });
  };

  const registerShareLink = (platform: ShareablePlatforms): void => {
    Analytics.getInstance().trackEvent(ANALYTICS_EVENTS.LINK_SHARED, {
      title,
      artiste,
      platform
    })
  };

  const sendOpenLinkAnalytics = (): void => {
    Analytics.getInstance().trackEvent(ANALYTICS_EVENTS.LINK_OPENED, {
      title,
      artiste,
      platform: platformName.toUpperCase()
    });
  };

  const confirmUserStorefront = (data: SelectableStorefront) => {
    setUserStorefront(data);
    setEditStorefront(false);
  };

  const toggleDisplayStorefrontSelector = () =>
    setEditStorefront((prevState) => !prevState);

  const renderStoreFront = (): JSX.Element => {
    if (isAppleLink && fetchedStorefront) {
      if (editStorefront) {
        return (
          <StorefrontSelector
            setUserStorefront={confirmUserStorefront}
            userStorefront={userStorefront}
          />
        );
      }

      if (userStorefront) {
        return (
          <section className={styles.storefrontTextContainer}>
            <span className={styles.storefrontText}>
              Selected Storefront:{' '}
              <span className={styles.storefrontLabel}>
                {userStorefront?.label}
              </span>
            </span>
            <button
              className={styles.storefrontTextBtn}
              onClick={toggleDisplayStorefrontSelector}
            >
              Change Storefront
            </button>
          </section>
        );
      }
    }

    return <span />;
  };

  const renderShareOptions = (): JSX.Element => (
    <Fragment>
      <a
        href={twitterShareLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shareGroup}
        onClick={() => registerShareLink(ShareablePlatforms.TWITTER)}
      >
        <TwitterIcon />
        <span>Twitter</span>
      </a>

      <a
        href={facebookShareLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shareGroup}
        onClick={() => registerShareLink(ShareablePlatforms.FACEBOOK)}
      >
        <FacebookIcon />
        <span>Facebook</span>
      </a>

      <a
        href={whatsappShareLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shareGroup}
        onClick={() => registerShareLink(ShareablePlatforms.WHATSAPP)}
      >
        <WhatsappIcon />
        <span>Whatsapp</span>
      </a>

      {isAnnieLink ? null : (
        <a
          href={trackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareGroup}
          onClick={sendOpenLinkAnalytics}
        >
          <OpenIcon />
          <span>Open Link</span>
        </a>
      )}

      {showButton ? (
        <button
          className={styles.copyLinkBtn}
          onClick={() => {
            registerLinkCopy()
            copyLink(trackUrl);
          }}
        >
          <CopyIcon />
          <span>Copy Link</span>
        </button>
      ) : null}
    </Fragment>
  );

  const isLoadedNoSelectedUserStorefront =
    isAppleLink && fetchedStorefront && !userStorefront;

  return (
    <section className={styles.platformModalContainer}>
      <Spacer h="10px" mh="10px" />

      {isLoadedNoSelectedUserStorefront ? (
        <Fragment>
          <p>
            Apple Music requires users to select a storefront which corresponds
            to their home location or the country selected when creating their
            apple account.
          </p>
          <p>
            This is used to generate the apple music link for the song
            requested.
          </p>
          <StorefrontSelector
            setUserStorefront={confirmUserStorefront}
            userStorefront={userStorefront}
          />
        </Fragment>
      ) : (
        <Fragment>
          {renderStoreFront()}
          {renderShareOptions()}
        </Fragment>
      )}
    </section>
  );
};

export default PlatformModal;
