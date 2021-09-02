import React, { FormEvent, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import cn from 'classnames';
import getConfig from 'next/config';

import styles from './styles.module.css';
import { SupportedPlatformsForLogin, getPlatformLabelForLogin } from '../../utils/platforms';
import type {
  LoginPlatform,
  RadioGroupRenderProps
} from '../..';
import CheckIcon from '../icons/CheckIcon';


const { publicRuntimeConfig } = getConfig();

const SelectPlatform: React.FC = () => {
  const { apiBaseUrl } = publicRuntimeConfig;

  const [userPlatform, setUserPlatform] = useState<LoginPlatform | null>(null);

  const isUserPlatformSelected = userPlatform !== null;

  const handlePlatformSelect = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (userPlatform) {
      const platformLabel = getPlatformLabelForLogin(userPlatform.name);
      const currentUrl = window.location.href;

      const apiEndpoint = new URL(`${apiBaseUrl}/auth/example`);
      apiEndpoint.searchParams.append('provider', platformLabel);
      apiEndpoint.searchParams.append('type', 'web');
      apiEndpoint.searchParams.append('next', currentUrl);

      const redirectUrl = apiEndpoint.toString();
      window.location.href = redirectUrl;
      return;
    }

    console.error('Invalid platform selection. You have to select a platfrom before proceeding.');
  };

  return (
    <form className={styles.selectPlatformContainer} onSubmit={handlePlatformSelect}>
      <section className={styles.platformsSelectContainer}>
        <RadioGroup.Description>Select a platform to clone the playlist.</RadioGroup.Description>
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

      <button
        className={styles.loginBtn}
        disabled={!isUserPlatformSelected}
        type="submit"
      >
        LOGIN
      </button>
    </form>
  );
}

export default SelectPlatform;
