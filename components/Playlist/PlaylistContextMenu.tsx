import React from 'react';
import { useRouter } from 'next/router';
import { Menu, Item, useContextMenu } from 'react-contexify';
import Link from 'next/link';
import 'react-contexify/dist/ReactContexify.css';

import { PLAYLIST_ID } from '../../utils/constants';

interface playlistProps {
  url: string;
  linkProps: {
    className: string;
    target: string;
    rel: string;
  };
}
const PlaylistContextMenu = (props: playlistProps) => {
  const { show } = useContextMenu({
    id: PLAYLIST_ID,
  });
  const router = useRouter();

  const displayMenu = (e: React.MouseEvent) => {
    show(e, { props: { url: props.url } });
  };

  const handleItemClick = ({ event, props }: any) => {
    if (event.currentTarget.id === 'open_link') {
      router.push(props.url);
      return;
    }
    const link = props.url;
    navigator.clipboard.writeText(link);
  };

  return (
    <div>
      <svg
        onClick={displayMenu}
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
        ></path>
      </svg>
      <Menu id={PLAYLIST_ID}>
        <Item onClick={handleItemClick}>Copy Annie Link</Item>
        <Item>
          <Link href={props.url}>
            <a {...props.linkProps}>Open Link</a>
          </Link>
        </Item>
      </Menu>
    </div>
  );
};

export default PlaylistContextMenu;
