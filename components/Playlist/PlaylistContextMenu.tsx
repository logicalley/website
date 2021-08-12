import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Menu, Item, useContextMenu } from 'react-contexify';
import Link from 'next/link';
import 'react-contexify/dist/ReactContexify.css';

import {
  GA_ACTION_ANNIE_LINK_COPY,
  GA_ACTION_OPEN_LINK_BUTTON_CLICK,
  GA_CATEGORY_TRACK_ACTIONS,
  PLAYLIST_CONTEXT_ID,
} from '../../utils/constants';
import styles from './styles.module.css';
import type { PlaylistContextProps, ContextMenuOpts } from '../..';
import copyLink from '../../utils/copyLink';
import { registerEvent } from '../../utils/googleAnalytics';

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
  const registerCopyLink = (): void => {
    const action = GA_ACTION_ANNIE_LINK_COPY;
    const label = `${title} - ${artiste}`;
    const analyticsLabel = `${action}: ${label} `;
    console.log(analyticsLabel);
    registerEvent({
      action,
      category: GA_CATEGORY_TRACK_ACTIONS,
      label: analyticsLabel,
      value: 1,
    });
  };

  const registerOpenLink = (): void => {
    const action = GA_ACTION_OPEN_LINK_BUTTON_CLICK;
    const label = `${title} - ${artiste}`;
    const analyticsLabel = `${action}: ${label} `;
    console.log(analyticsLabel);
    registerEvent({
      action,
      category: GA_CATEGORY_TRACK_ACTIONS,
      label: analyticsLabel,
      value: 1,
    });
  };

  const handleItemClick = ({ event, props }: any) => {
    if (event.currentTarget.id === 'open_link') {
      registerOpenLink();
      window.open(props.url);
    } else {
      copyLink(props.url, registerCopyLink);
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
        <Item onClick={handleItemClick}>Copy Link</Item>
        <Item onClick={handleItemClick} id="open_link">
          Open link
        </Item>
      </Menu>
    </section>
  );
};

export default PlaylistContextMenu;
