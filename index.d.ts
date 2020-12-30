import {
  ContactFormReducerEnum,
  ANNIE_TYPE,
  SPOTIFY_TYPE,
  DEEZER_TYPE,
  APPLE_MUSIC_TYPE
} from './utils/constants';

export interface NavProps {
  isHomePage: boolean
};

export interface SpacerProps {
  h: string,
  mh: string
};

export interface AnnieLogoProps {
  height?: string
  width?: string
};

interface Platform {
  name: string,
  url: string,
  color: string,
  buttonColor: string,
  icon: string | null,
  darkIcon: string | null
}

interface Track {
  id: number,
  isrc: string,
  title: string,
  artiste: string,
  image_url: string,
  genre: string | null,
  year: string | null,
  preview_url: string,
  platforms: Platform[]
}

export interface TrackPageProps {
  trackDetails: Track,
  trackId: string,
  error?: string
}

export interface SEOProps {
  title: string
  keywords: string
  description?: string
  url: string
  imageUrl?: string
}


export interface TrackHeaderProps {
  title: string
}

interface TrackInfoProps {
  title: string
  artiste: string
  year: string | null
  genre: string | null
  imageUrl: string
}

export interface TrackInfoCardProps extends TrackInfoProps {
  previewUrl: string | null
}

export interface PlatformGroup extends TrackInfoProps {
  platforms: Platform[]
}

export interface PlatformCardProps extends TrackInfoProps, Platform {}

export interface CopyLinkButtonProps {
  link: string
  label: string
  platform: ANNIE_TYPE | SPOTIFY_TYPE | DEEZER_TYPE | APPLE_MUSIC_TYPE
}

export interface AudioPlayerProps {
  previewUrl: string
  analyticsLabel: string
}

export interface Faq {
  question: string
  answer: string
}

export interface AccordionProps extends Faq {}

export interface ContactFormState {
  email: string
  complaint: string
}

type ContactFormReducerAction = {
  type: ContactFormReducerEnum
  payload: string
}

export interface IFrameLoaderProps {
  url: string
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
};
