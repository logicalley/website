export interface NavProps {
  isHomePage: boolean
};

export interface SpacerProps {
  height: string
};

export interface AnnieLogoProps {
  height?: string
  width?: string
};

interface Platform {
  name: string,
  url: string,
  color: string,
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
  }
}
