import React from 'react';
import Search from '../components/Search.jsx';
import TestUtils from 'react-addons-test-utils';

describe('search', () => {
  it('renders without problems', () => {
    const search = TestUtils.renderIntoDocument(<Search />);
    expect(search).toBeDefined();
  });
});
