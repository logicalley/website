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
  genre: number | null,
  year: string | null,
  preview_url: string,
  platforms: Platform[]
}

export interface TrackPageProps {
  trackDetails: {
    status: string,
    data: Track
  },
  trackId: string
}

export interface TrackQuery extends GetServerSidePropsContext {
  params: {
    id: string
  }
}

export interface SEOProps {
  title: string
  keywords: string
  description: string
  url: string
  imageUrl: string
}
