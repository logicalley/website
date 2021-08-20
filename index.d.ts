import * as React from 'react';
import { MenuId } from 'react-contexify';

import { ContextMenuChildName } from './utils/constants';

import {
  ContactFormReducerEnum,
  ANNIE_TYPE,
  SPOTIFY_TYPE,
  DEEZER_TYPE,
  APPLE_MUSIC_TYPE,
} from './utils/constants';

export interface NavProps {
  isHomePage: boolean;
}

export interface SpacerProps {
  h: string;
  mh: string;
}

export interface AnnieLogoProps {
  height?: string;
  width?: string;
}

interface Platform {
  name: string;
  url: string;
  color: string;
  buttonColor: string;
  icon: string | null;
  darkIcon: string | null;
  shortUrl: string | null;
}

interface Track {
  id: number;
  isrc: string;
  title: string;
  artiste: string;
  image_url: string;
  genre: string | null;
  year: string | null;
  preview_url: string;
  platforms: Platform[];
}

interface PlaylistInfo {
  id: number;
  owner: string;
  origin: string;
  origin_id: string;
  description: string;
  image_url: string;
  title: string;
  apple_url: string;
  total: number;
  count: number;
  next: string;
  originalUrl: string;
}

interface Playlist extends PlaylistInfo {
  tracks: PlaylistTrackMetaData[];
}

export interface TrackPageProps {
  trackDetails: Track;
  trackId: string;
  error?: string;
}

export interface PlaylistPageProps {
  playlistDetails: Playlist;
  playlistId: string;
  error?: string;
}

export interface SEOProps {
  title: string;
  keywords: string;
  description?: string;
  url: string;
  imageUrl?: string;
}

interface TrackInfoProps {
  title: string;
  artiste: string;
  year: string | null;
  genre: string | null;
  imageUrl: string;
}

export interface TrackInfoCardProps extends TrackInfoProps {
  previewUrl: string | null;
}

export interface PlatformGroup extends TrackInfoProps {
  platforms: Platform[];
}

export interface PlatformCardProps extends TrackInfoProps, Platform {}

export interface AudioPlayerProps {
  previewUrl: string;
  analyticsLabel: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface AccordionProps extends Faq {}

export interface ContactFormState {
  email: string;
  complaint: string;
  name: string;
  formSubmitted: boolean;
  loading: boolean;
  errorMessage: string;
}

type ContactFormReducerAction = {
  type: ContactFormReducerEnum;
  payload: string;
};

export type ComplaintFormPayload = {
  name?: string;
  email?: string;
  issue: string;
};

export interface IFrameLoaderProps {
  url: string;
}

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export interface OembedProps {
  trackId: string;
  title: string;
  type: 'track' | 'playlist';
}

export interface PlatformModalProps {
  title: string;
  url: string;
  artiste: string;
  closeFn: () => void;
  platformName: ANNIE_TYPE | SPOTIFY_TYPE | DEEZER_TYPE | APPLE_MUSIC_TYPE;
  shortUrl: string | null;
}

export interface Storefront {
  id: string;
  name: string;
}

export interface SelectableStorefront {
  label: string;
  value: string;
}

export interface StorefrontSelectorProps {
  setUserStorefront: Dispatch<SetStateAction<SelectableStorefront | undefined>>;
  userStorefront: SelectableStorefront | undefined;
}
export interface PlaylistInfoCard {
  info: PlaylistInfo;
}

export interface PlaylistTrack {
  track: PlaylistTrackMetaData;
}

export interface PlaylistTrackMetaData {
  id: number;
  title: string;
  artiste: string;
  image_url: string;
  annieUrl: string;
}
export interface TrackDisplayProps extends PlaylistTrack {}

export interface LoadMoreProps {
  fetchMore: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isLoading: boolean;
}

export interface ActiveTrack {
  id: number;
  previewUrl: string;
  analyticsLabel: string;
}

export interface ClonePlaylistModalProps {
  playlistId: number;
}

export interface PlaylistContextProps {
  url: string;
  artiste: string;
  title: string;
  linkProps: {
    className: string;
    target: string;
    rel: string;
  };
  getClientRect: () => DOMRect | undefined;
}

export interface ContextMenuOpts {
  id: MenuId;
  props?: any;
  position?: {
    x: number;
    y: number;
  } | null;
}

export interface ContextMenuClickEvent {
  props?: { url: string };
  data?: { name: ContextMenuChildName },
  event: any
}
