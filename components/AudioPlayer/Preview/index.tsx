import React from 'react';
import { useAudio } from 'react-use';
import classNames from 'classnames';

import styles from './styles.module.css';

import type { TrackAudioPreviewProps } from '../../..';


const AudioPlayerPreview: React.FC<TrackAudioPreviewProps> = (props: TrackAudioPreviewProps) => {
  const { track } = props;
  const audioUrl = track.preview_url;

  const [audio, state, controls] = useAudio({
    src: audioUrl,
    autoPlay: false,
  });

  const playOrPauseFn = state.playing ? controls.pause : controls.play;
  const trackUrl = track.platforms[0].url;

  return (
    <section className={styles.previewContainer}>
      <img
        className={styles.previewImage}
        src={track.image_url}
        alt={`Cover art for ${track.title}'s ${track.artiste}`}
      />
      <section className={styles.trackDetails}>
        <span className={styles.trackTitle}>{track.title}</span>
        <span className={styles.trackArtiste}>{track.artiste}</span>
        {audio}
      </section>

      <button className={classNames(styles.actionBtn, {
        [styles.paused]: state.playing
      })} onClick={playOrPauseFn}>
      </button>
      <a href={trackUrl} className={styles.seeMore}>See More ...</a>
    </section>
  );
};

export default AudioPlayerPreview;
