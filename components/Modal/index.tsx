import React, { Fragment, memo } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import type { ModalProps } from '../..';
import styles from './styles.module.css';


const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { children, onClose, isOpen, title, description } = props;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="section"
        className={styles.dialog}
        onClose={onClose}
      >
        <Dialog.Overlay className={styles.overlay} as="section" />

        <section className={styles.wrapper}>
          <section className={styles.wrapperHeader}>
            <Dialog.Title as="h3" className={styles.modalTitle}>{title}</Dialog.Title>
            <button onClick={onClose} className={styles.closeBtn}>&times;</button>
          </section>

          {description ? <Dialog.Description>{description}</Dialog.Description> : null}

          {children}
        </section>
      </Dialog>
    </Transition>
  )
};

export default memo(Modal);
