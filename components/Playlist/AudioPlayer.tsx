import React, { useRef, useState } from 'react';

import type { AudioPlayerProps } from '../..';

import { registerEvent } from '../../utils/googleAnalytics';
import {
  GA_ACTION_MUSIC_PLAYER,
  GA_CATEGORY_TRACK_ACTIONS,
  PlayStatus
} from '../../utils/constants';
import styles from './styles.module.css';


const AudioPlayer: React.FC<AudioPlayerProps> = (props: AudioPlayerProps) => {
  const { previewUrl, analyticsLabel } = props;

  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const [playStatus, setPlayStatus] = useState<PlayStatus>(PlayStatus.PAUSE);
  const primaryColor: string = '#6525EC';

  const sendAudioAnalytics = () => registerEvent({
    action: GA_ACTION_MUSIC_PLAYER,
    category: GA_CATEGORY_TRACK_ACTIONS,
    label: `${GA_ACTION_MUSIC_PLAYER}: ${analyticsLabel}`,
    value: 1
  })

  const togglePlay = (): void => {
    if (audioPlayerRef.current) {
      console.log(audioPlayerRef.current.paused)
      if (audioPlayerRef.current.paused) {
        sendAudioAnalytics();
        setPlayStatus(PlayStatus.PAUSE);
        audioPlayerRef.current.play();
      } else {
        audioPlayerRef.current.pause();
        setPlayStatus(PlayStatus.PLAY);
      }
    }
  };

  const PauseSVG: JSX.Element = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="76"
      fill="none"
      viewBox="0 0 46 76"
      className={styles.pauseButton}
      onClick={togglePlay}
    >
      <path
        fill={primaryColor}
        fillRule="evenodd"
        d="M41 0a5 5 0 00-5 5v66a5 5 0 0010 0V5a5 5 0 00-5-5M10 5v66a5 5 0 01-10 0V5a5 5 0 0110 0"
        clipRule="evenodd"
      />
    </svg>
  );

  const PlaySVG: JSX.Element = (
    <svg viewBox="0 0 60 75" className={styles.playButton}>
      <path fill="none" stroke={primaryColor} d="M32 25L32 58 60 42z">
      </path>
    </svg>
  );

  return (
    <button className={styles.audioPlayerContainer}>
      {/* {playStatus === PlayStatus.PLAY ? PlaySVG : PlaySVG} */}
      <audio ref={audioPlayerRef}>
        <source src={previewUrl} type="audio/mp3" />
      </audio>
    </button>
  )
};

export default AudioPlayer;
