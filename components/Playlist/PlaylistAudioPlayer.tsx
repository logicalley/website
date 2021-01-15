import React, { memo, useRef, useState } from 'react';

import type { AudioPlayerProps } from '../..';

import { registerEvent } from '../../utils/googleAnalytics';
import {
  GA_ACTION_MUSIC_PLAYER,
  GA_CATEGORY_TRACK_ACTIONS,
  PlayStatus
} from '../../utils/constants';
import styles from './styles.module.css';


const PlaylistAudioPlayer: React.FC<AudioPlayerProps> = (props: AudioPlayerProps) => {
  const { previewUrl, analyticsLabel } = props;

  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const [playStatus, setPlayStatus] = useState<boolean>(false);
  const primaryColor: string = '#140929';

  const sendAudioAnalytics = () => registerEvent({
    action: GA_ACTION_MUSIC_PLAYER,
    category: GA_CATEGORY_TRACK_ACTIONS,
    label: `${GA_ACTION_MUSIC_PLAYER}: ${analyticsLabel}`,
    value: 1
  })

  const togglePlay = (): void => {
    if (audioPlayerRef.current) {
      if (audioPlayerRef.current.paused) {
        sendAudioAnalytics();
        setPlayStatus(true);
        audioPlayerRef.current.play();
      } else {
        audioPlayerRef.current.pause();
        setPlayStatus(false);
      }
    }
  };

  const PauseSVG: JSX.Element = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 113 164"
      className={styles.pauseButton}
    >
      <path stroke={primaryColor} strokeWidth="20" d="M10 0v164M103 0v164"></path>
    </svg>
  );

  const PlaySVG: JSX.Element = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 279 404"
      className={styles.playButton}
    >
      <path stroke={primaryColor} strokeWidth="20" d="M4 396V8l268 195L4 396z"></path>
    </svg>
  );

  return (
    <button className={styles.audioPlayerContainer} onClick={togglePlay}>
      {playStatus ? PauseSVG : PlaySVG}
      <audio ref={audioPlayerRef}>
        <source src={previewUrl} type="audio/mp3" />
      </audio>
    </button>
  )
};

export default memo(PlaylistAudioPlayer);
