import React, { Fragment, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import cn from 'classnames';

import styles from './styles.module.css';
import { SupportedPlatformsForLogin } from '../../utils/platforms';
import type {
  LoginPlatform,
  RadioGroupRenderProps
} from '../..';
import CheckIcon from '../icons/CheckIcon';
import {
  SPOTIFY_TYPE,
  DEEZER_TYPE,
  APPLE_MUSIC_TYPE
} from '../../utils/constants';


const SelectPlatform: React.FC = () => {
  const [userPlatform, setUserPlatform] = useState<LoginPlatform | null>(null);

  const isUserPlatformSelected = userPlatform !== null;

  return (
    <section className={styles.selectPlatformContainer}>
      <section className={styles.platformsSelectContainer}>
        <RadioGroup value={userPlatform} onChange={setUserPlatform}>
          {SupportedPlatformsForLogin.map((platform) => {
            const derivedOptionClassName = ({ checked }: RadioGroupRenderProps) => cn(styles.platformOption, {
              [styles.checkedPlatformOption]: checked,
              [styles.uncheckedPlatformOption]: !checked,
            });

            return (
              <RadioGroup.Option
                key={platform.id}
                value={platform}
                className={derivedOptionClassName}
                style={{borderColor: platform.borderColor}}
              >
                {({ checked }: RadioGroupRenderProps) => (
                  <section className={styles.radioGroupOption}>
                    <span className={cn(styles.platformName, {
                      [styles.activePlatformName]: checked
                    })}>{platform.name}</span>
                    {checked ? <CheckIcon className={styles.checkIcon} /> : null}
                  </section>
                )}
              </RadioGroup.Option>
            )
          })}
        </RadioGroup>
      </section>

      <button className={styles.loginBtn} disabled={!isUserPlatformSelected}>LOGIN</button>
    </section>
  );
}

export default SelectPlatform;
