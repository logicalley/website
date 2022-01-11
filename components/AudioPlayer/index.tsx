import React, {
  useRef,
  useState,
  SyntheticEvent,
  useEffect,
  memo
} from 'react';

import styles from './styles.module.css';

import type { AudioPlayerProps } from '../..';

import { registerEvent } from '../../utils/googleAnalytics';
import {
  ANALYTICS_EVENTS,
  GA_ACTION_MUSIC_PLAYER,
  GA_CATEGORY_TRACK_ACTIONS,
  PlayStatus
} from '../../utils/constants';
import Analytics from '../../utils/analytics';


const AudioPlayer: React.FC<AudioPlayerProps> = ({ previewUrl }: AudioPlayerProps) => {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [strokeProgress, setStrokeProgress] = useState<string>("2,2000");
  const [playStatus, setPlayStatus] = useState<PlayStatus>(PlayStatus.PLAY);

  const primaryColor: string = '#000';
  const darkColor: string = '#000';
  const radius: number = 40;
  const circumference: number = radius * 2 * Math.PI;

  // const sendAudioAnalytics = () => registerEvent({
  //   action: GA_ACTION_MUSIC_PLAYER,
  //   category: GA_CATEGORY_TRACK_ACTIONS,
  //   label: `${GA_ACTION_MUSIC_PLAYER}: ${analyticsLabel}`,
  //   value: 1
  // });

  const sendAudioAnalytics = () => Analytics.getInstance().trackEvent(ANALYTICS_EVENTS.TRACK_AUDIO_PREVIEW, {
    url: previewUrl
  });

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
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" className={styles.playButton} onClick={togglePlay}>
      <path
        fill={primaryColor}
        fillRule="evenodd"
        d="M9.333 9.093v13.814a1.33 1.33 0 002.054 1.12L22.24 17.12c.827-.52.827-1.72 0-2.253L11.387 7.973a1.33 1.33 0 00-2.054 1.12z"
        clipRule="evenodd"
      />
    </svg>
  )

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
  }, [previewUrl]);

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
