import '@testing-library/jest-dom';

import {
  log,
  errorLog,
  warnLog,
  debugLog,
  traceLog,
  tableLog,
  infoLog,
} from '../logsUtils';

describe('logUtils unit tests', () => {
  const originalNodeEnv = process.env.NODE_ENV;

  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  afterEach(() => {
    process.env.NODE_ENV = originalNodeEnv;
  });

  it('log unit test', () => {
    process.env.NODE_ENV = 'development';
    log('test');
    process.env.NODE_ENV = 'production';
    log('test');
  });

  it('errorLog unit test', () => {
    process.env.NODE_ENV = 'development';
    errorLog('test');
    process.env.NODE_ENV = 'production';
    errorLog('test');
  });

  it('warnLog unit test', () => {
    process.env.NODE_ENV = 'development';
    warnLog('test');
    process.env.NODE_ENV = 'production';
    warnLog('test');
  });

  it('debugLog unit test', () => {
    process.env.NODE_ENV = 'development';
    debugLog('test');
    process.env.NODE_ENV = 'production';
    debugLog('test');
  });

  it('traceLog unit test', () => {
    process.env.NODE_ENV = 'development';
    traceLog('test');
    process.env.NODE_ENV = 'production';
    traceLog('test');
  });

  it('tableLog unit test', () => {
    process.env.NODE_ENV = 'development';
    tableLog('test');
    process.env.NODE_ENV = 'production';
    tableLog('test');
  });

  it('infoLog unit test', () => {
    process.env.NODE_ENV = 'development';
    infoLog('test');
    process.env.NODE_ENV = 'production';
    infoLog('test');
  });
});
