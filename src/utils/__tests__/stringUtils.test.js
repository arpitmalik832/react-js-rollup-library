import '@testing-library/jest-dom';

import {
  capitalizeFirstChar,
  equalsIgnoringCase,
  maskCharsExceptLastN,
  renderInitials,
} from '../stringUtils';

describe('stringUtils unit tests', () => {
  it('testing capitalizeFirstChar', () => {
    capitalizeFirstChar('test');
    capitalizeFirstChar(' ');
  });

  it('testing equalsIgnoringCase', () => {
    equalsIgnoringCase('test', 'test');
  });

  it('testing maskCharsExceptLastN', () => {
    maskCharsExceptLastN('test', 2);
    maskCharsExceptLastN('testing');
  });

  it('testing renderInitials', () => {
    renderInitials('test');
    renderInitials('test test');
    renderInitials('');
  });
});
