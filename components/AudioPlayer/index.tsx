import React, { useRef, useState, SyntheticEvent, useEffect, memo } from 'react';

import styles from './styles.module.css';

import type { AudioPlayerProps } from '../..';

import { registerEvent } from '../../utils/googleAnalytics';
import {
  GA_ACTION_MUSIC_PLAYER,
  GA_CATEGORY_TRACK_ACTIONS,
  PlayStatus
} from '../../utils/constants';


const AudioPlayer: React.FC<AudioPlayerProps> = ({ previewUrl, analyticsLabel }: AudioPlayerProps) => {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [strokeProgress, setStrokeProgress] = useState<string>("2,2000");
  const [playStatus, setPlayStatus] = useState<PlayStatus>(PlayStatus.PLAY);

  const primaryColor: string = '#000';
  const darkColor: string = '#000';
  const radius: number = 40;
  const circumference: number = radius * 2 * Math.PI;

  const sendAudioAnalytics = () => registerEvent({
    action: GA_ACTION_MUSIC_PLAYER,
    category: GA_CATEGORY_TRACK_ACTIONS,
    label: `${GA_ACTION_MUSIC_PLAYER}: ${analyticsLabel}`,
    value: 1
  })

  const togglePlay = (): void => {
    if (audioPlayerRef.current) {
      if (audioPlayerRef.current.paused) {
        audioPlayerRef.current.play();
        sendAudioAnalytics();
        setPlayStatus(PlayStatus.PAUSE);
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="75"
      fill="none"
      viewBox="0 0 50 75"
      className={styles.playButton}
      onClick={togglePlay}
    >
      <path
        fill={primaryColor}
        fillRule="evenodd"
        d="M8 62.758v-49.54l31.525 24.77L8 62.758zm40.471-27.915l-42-33A3.999 3.999 0 000 4.988v66a4.002 4.002 0 004 4c.879 0 1.753-.29 2.471-.855l42-33a4 4 0 000-6.29z"
        clipRule="evenodd"
      />
    </svg>
  );

  const StopSVG: JSX.Element = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="77"
      height="78"
      fill="none"
      viewBox="0 0 77 78"
      className={styles.stopButton}
      onClick={togglePlay}
    >
      <path
        fill={primaryColor}
        fillRule="evenodd"
        d="M9 68.988h59v-59H9v59zm68-63.5a4.5 4.5 0 00-4.5-4.5h-68a4.5 4.5 0 00-4.5 4.5v68a4.5 4.5 0 004.5 4.5h68a4.5 4.5 0 004.5-4.5v-68z"
        clipRule="evenodd"
      />
    </svg>
  );

  const renderButton = (): JSX.Element => {
    switch (playStatus) {
      case PlayStatus.PAUSE:
        return PauseSVG;
      case PlayStatus.PLAY:
        return PlaySVG;
      case PlayStatus.STOP:
        return StopSVG;
      default:
        return PlaySVG;
    }
  }

  const calculateProgress = (event: SyntheticEvent<HTMLAudioElement>): void => {
    const { currentTime } = event.currentTarget;
    const progress = Math.round((currentTime / audioDuration) * 100);
    const audioClipProgress = ((progress * circumference) / 100).toString();

    if (progress >= 100) {
      setPlayStatus(PlayStatus.PLAY);
    }

    setStrokeProgress(`${audioClipProgress},2000`);
  }

  useEffect(() => {
    if (audioPlayerRef.current && previewUrl) {
      const { duration } = audioPlayerRef.current;
      setAudioDuration(duration || 29);
    }
  }, []);

  return (
    <section className={styles.audioPlayerContainer}>
      <svg
        viewBox="0 0 120 90"
        xmlns="http://www.w3.org/2000/svg"
        height={radius * 2}
        width={radius * 2}
        onClick={togglePlay}
      >
        <g transform="translate(14, 0) rotate(-90, 38, 38)">
          <circle cx={radius} cy={radius} r={radius} fill="transparent" strokeWidth="0.5" stroke={darkColor} />
          <circle cx={radius} cy={radius} r={radius} fill="transparent" stroke={primaryColor} strokeWidth="3" strokeDasharray={strokeProgress} />
        </g>
      </svg>
      {renderButton()}
      <audio ref={audioPlayerRef} onTimeUpdate={calculateProgress}>
        <source src={previewUrl} type="audio/mp3" />
      </audio>
    </section>
  );
}

export default memo(AudioPlayer);
