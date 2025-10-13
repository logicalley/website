import React, { Fragment, memo } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import type { ModalProps } from '../..';
import styles from './styles.module.css';

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { children, onClose, isOpen, title, description } = props;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className={styles.dialog}
        onClose={onClose}
      >
        <Dialog.Overlay className={styles.overlay} />

        <div className={styles.wrapper}>
          <div className={styles.wrapperHeader}>
            <Dialog.Title as="h2" className={styles.modalTitle}>
              {title}
            </Dialog.Title>
            <button
              onClick={onClose}
              className={styles.closeBtn}
            >
              &times;
            </button>
          </div>

          {description ? (
            <Dialog.Description>{description}</Dialog.Description>
          ) : null}

          {children}
        </div>
      </Dialog>
    </Transition>
  );
};

export default memo(Modal);
