import React, { useRef, useState } from 'react';
import { useAudio } from 'react-use';
import Image from 'next/image';
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

  console.log({ state })

  const playOrPauseFn = state.playing ? controls.pause : controls.play;

  return (
    <section className={styles.previewContainer}>
      <Image
        className={styles.previewImage}
        layout="fixed"
        objectFit="contain"
        width={250}
        height={250}
        src={track.image_url}
        alt={`Cover art for ${track.title}'s ${track.artiste}`}
        quality={100}
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
    </section>
  );
};

export default AudioPlayerPreview;
