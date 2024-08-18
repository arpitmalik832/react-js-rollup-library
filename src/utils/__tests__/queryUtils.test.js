import '@testing-library/jest-dom';

import {
  getQueryParam,
  processQueryParams,
  mapQueryString,
} from '../queryUtils';

describe('queryUtils unit tests', () => {
  it('getQueryParam unit test', () => {
    getQueryParam('?a=b', 'a');
    getQueryParam('?a=b');
  });

  it('processQueryParams unit test', () => {
    processQueryParams('?x=test');
  });

  it('mapQueryString unit test', () => {
    mapQueryString('x=test');
    mapQueryString();
  });
});
