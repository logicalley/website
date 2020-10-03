import React, { useState, useEffect } from 'react';

import styles from './styles.module.css';

import type { CopyLinkButtonProps } from '../..';


const CopyLinkButton: React.FC<CopyLinkButtonProps> = ({ link }: CopyLinkButtonProps) => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const shouldShowCopyLinkButton: boolean = document.queryCommandSupported('copy');
    setShowButton(shouldShowCopyLinkButton);
  }, []);

  const copyLink = (): Promise<void> => navigator
    .clipboard
    .writeText(link)

  return showButton ? (
    <button className={styles.copyLinkBtn} onClick={copyLink}>
      Copy Link
    </button>
  ) : null;
};

export default CopyLinkButton;
