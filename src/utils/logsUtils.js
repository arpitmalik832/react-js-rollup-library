import { ENVS } from '../enums/app';

const log = (...args) => {
  if (process.env.NODE_ENV !== ENVS.PROD) {
    // eslint-disable-next-line no-console
    console.log(...args);
  }
};

const errorLog = (...args) => {
  if (process.env.NODE_ENV !== ENVS.PROD) {
    // eslint-disable-next-line no-console
    console.error(...args);
  }
};

const warnLog = (...args) => {
  if (process.env.NODE_ENV !== ENVS.PROD) {
    // eslint-disable-next-line no-console
    console.warn(...args);
  }
};

const debugLog = (...args) => {
  if (process.env.NODE_ENV !== ENVS.PROD) {
    // eslint-disable-next-line no-console
    console.debug(...args);
  }
};

const traceLog = (...args) => {
  if (process.env.NODE_ENV !== ENVS.PROD) {
    // eslint-disable-next-line no-console
    console.trace(...args);
  }
};

const tableLog = (...args) => {
  if (process.env.NODE_ENV !== ENVS.PROD) {
    // eslint-disable-next-line no-console
    console.table(...args);
  }
};

const infoLog = (...args) => {
  if (process.env.NODE_ENV !== ENVS.PROD) {
    // eslint-disable-next-line no-console
    console.info(...args);
  }
};

export { log, errorLog, warnLog, debugLog, traceLog, tableLog, infoLog };
