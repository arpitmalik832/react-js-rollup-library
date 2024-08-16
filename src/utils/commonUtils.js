import { errorLog } from './logsUtils';

const isNonInteger = val => val === '.' || !/^[0-9,]*$/.test(val);

const triggerCallback = (callback, ...args) => {
  if (callback && typeof callback === 'function') {
    callback(...args);
  }
};

const generateUniqSerial = base =>
  'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, () => {
    const r = Math.floor(Math.random() * 16);
    return r.toString(base);
  });

const generateRandomString = len => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < len; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const getMaskedValue = str => `${str}`.replace(/.(?=.{4})/g, '*');

const downloadFileFromData = (
  fileData,
  fileName = 'download',
  fileType = 'pdf',
) => {
  const file = new Blob([fileData], { type: 'application/pdf' });
  const url = window.URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${fileName}.${fileType}`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const getEncodedURI = (url, pathname) =>
  `redirect=${encodeURIComponent(url)}&pathname=${pathname.slice(1)}`;

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const copyToClipboard = async text => {
  try {
    await navigator?.clipboard?.writeText(text);
  } catch (e) {
    errorLog('Failed to copy: ', e);
  }
};

export {
  isNonInteger,
  triggerCallback,
  generateUniqSerial,
  generateRandomString,
  getMaskedValue,
  downloadFileFromData,
  getEncodedURI,
  scrollToTop,
  copyToClipboard,
};
