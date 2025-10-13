import React, { Fragment, memo } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react';

import type { ModalProps } from '../..';
import styles from './styles.module.css';

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { children, onClose, isOpen, title, description } = props;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className={styles.dialog} onClose={onClose}>
        <div className={styles.overlay} />

        <DialogPanel className={styles.wrapper}>
          <div className={styles.wrapperHeader}>
            <DialogTitle as="h2" className={styles.modalTitle}>
              {title}
            </DialogTitle>
            <button onClick={onClose} className={styles.closeBtn} data-autofocus>
              &times;
            </button>
          </div>

          {description ? <p>{description}</p> : null}

          {children}
        </DialogPanel>
      </Dialog>
    </Transition>
  );
};

export default memo(Modal);
