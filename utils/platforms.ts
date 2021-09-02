import {
  SPOTIFY_TYPE,
  DEEZER_TYPE,
  APPLE_MUSIC_TYPE
} from './constants';
import type { LoginPlatform, PlatformOptions } from '..';


export const SupportedPlatformsForLogin: LoginPlatform[] = [
  {
    id: SPOTIFY_TYPE,
    name: SPOTIFY_TYPE,
    borderColor: '#E5F4EB'
  },
  {
    id: DEEZER_TYPE,
    name: DEEZER_TYPE,
    borderColor: '#F9F2DE'
  },
  // {
  //   id: APPLE_MUSIC_TYPE,
  //   name: APPLE_MUSIC_TYPE,
  //   borderColor: '#FFE9F4'
  // }
];

export const getPlatformLabelForLogin = (platformName: PlatformOptions): string => {
  switch(platformName) {
    case SPOTIFY_TYPE:
      return 'spotify';
    case DEEZER_TYPE:
      return 'deezer';
    case APPLE_MUSIC_TYPE:
      return 'apple_music';
    default:
      return '';
  }
}
