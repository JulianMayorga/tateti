'use strict';

describe('ngBlog', function () {

  beforeEach(function () {
    browser().navigateTo('/');
  });

  it('does not redirect', function () {
    expect(browser().location().url()).toBe('/');
  });

});
