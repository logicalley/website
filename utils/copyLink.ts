import toast from 'react-hot-toast';

const copyLink = (url: string): Promise<void> => {
  let status: string;

  return navigator.clipboard
    .writeText(url)
    .then(() => {
      status = 'success';
    })
    .catch(() => {
      status = 'failure';
    })
    .finally(() => {
      const isSuccess = status === 'success';
      const toastFn = isSuccess ? toast.success : toast.error;
      const toastMessage = isSuccess ? 'Link Copied.' : 'Failed to copy link.';
      toastFn(toastMessage);
    });
};

export default copyLink;
