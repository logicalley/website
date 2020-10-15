import { GetServerSidePropsContext } from 'next';


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
  description: string
  url: string
  imageUrl: string
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
}

export interface AudioPlayerProps {
  previewUrl: string
}

export interface Faq {
  question: string
  answer: string
}

export interface AccordionProps extends Faq {}
