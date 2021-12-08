import React, { FormEvent, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import cn from 'classnames';
import { useRouter } from 'next/router';

import styles from './styles.module.css';
import { SupportedPlatformsForLogin, getPlatformLabelForLogin } from '../../utils/platforms';
import type {
  LoginPlatform,
  RadioGroupRenderProps
} from '../..';
import CheckIcon from '../icons/CheckIcon';


const SelectPlatform: React.FC = () => {
  const router = useRouter();
  const [userPlatform, setUserPlatform] = useState<LoginPlatform | null>(null);

  const isUserPlatformSelected = userPlatform !== null;

  const handlePlatformSelect = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (userPlatform) {
      const platformLabel = getPlatformLabelForLogin(userPlatform.name);
      const currentUrl = window.location.href;

      router.replace(`/auth/example/${platformLabel}?type=web&next=${currentUrl}`);
      return;
    }

    // TODO: log this to sentry
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
