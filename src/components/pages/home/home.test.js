/* eslint-disable fp-jxl/no-nil, fp-jxl/no-unused-expression */
import { shallowMount } from '@vue/test-utils';
import Home from './index';

describe('Home Page', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    test('renders template text', () => {
      const wrapper = shallowMount(Home);

      const actual = wrapper.text();

      expect(actual).toBe('Template Vue Application');
    });
  });
});
