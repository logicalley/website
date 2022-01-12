import React from 'react';
import { useRouter } from 'next/router';
import { Menu, Item, useContextMenu, Separator } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';

import {
  ContextMenuChildName,
  ANALYTICS_EVENTS,
  PlaylistContextActions,
  PLAYLIST_CONTEXT_ID,
} from '../../utils/constants';
import styles from './styles.module.css';
import type {
  PlaylistContextProps,
  ContextMenuOpts,
  ContextMenuClickEvent
} from '../..';
import copyLink from '../../utils/copyLink';
import Analytics from '../../utils/analytics';


const PlaylistContextMenu: React.FC<PlaylistContextProps> = (
  props: PlaylistContextProps
) => {
  const { url, title, artiste, getClientRect } = props;

  const { show } = useContextMenu({
    id: PLAYLIST_CONTEXT_ID,
  });

  const router = useRouter();

  const displayMenu = (e: React.MouseEvent) => {
    const showOptions: ContextMenuOpts = {
      id: PLAYLIST_CONTEXT_ID,
      props: { url },
    };

    const clientRect = getClientRect();
    if (clientRect) {
      const { top, right } = clientRect;

      showOptions.position = {
        x: right - 200,
        y: top,
      };
    }

    show(e, showOptions);
  };

  const sendAnalytics = (action: string): void => {
    Analytics.getInstance().trackEvent(ANALYTICS_EVENTS.PLAYLIST_CONTEXT_ACTIONS, {
      trackTitle: title,
      artiste,
      action
    })
  }

  const handleItemClick = ({ event, props, data } : ContextMenuClickEvent): void => {
    if (data && props) {
      const { url } = props;
      switch (data.name) {
        case ContextMenuChildName.COPY_LINK:
          sendAnalytics(PlaylistContextActions.COPY);
          copyLink(url);
          break;
        case ContextMenuChildName.OPEN_LINK:
          sendAnalytics(PlaylistContextActions.OPEN);
          window.open(url, 'blank');
          break;
        default:
          break;
      }
    }
  };

  return (
    <section onClick={displayMenu} className={styles.contextBtn}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill="#1D1D1D"
          fillRule="evenodd"
          d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          clipRule="evenodd"
        />
      </svg>
      <Menu id={PLAYLIST_CONTEXT_ID}>
        <Item onClick={handleItemClick} data={{ name: ContextMenuChildName.COPY_LINK }}>Copy Link</Item>
        <Separator />
        <Item onClick={handleItemClick} data={{ name: ContextMenuChildName.OPEN_LINK }}>
          Open link
        </Item>
      </Menu>
    </section>
  );
};

export default PlaylistContextMenu;
