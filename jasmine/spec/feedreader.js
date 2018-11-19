/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /*  tests to ensure that the allFeeds variable has
     *  been defined and that it is not empty.
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });
    // test to ensure whether a url is defined for all
    // the feeds in allFeeds object
    it('url defined', function() {
      for (let feed of allFeeds) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      }
    });

    // test to ensure whether a name is defined for
    // all the feeds in allFeeds object
    it('name defined', function() {
      for (let feed of allFeeds) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      }
    });
  });

  // test suite for menu element : "The menu"
  describe('The menu', function() {

    // test to ensure that menu  element is hidden by default
    it('menu is hidden by default', function() {
      const bodyElement = document.querySelector('body');
      expect(bodyElement.classList.contains('menu-hidden')).toBe(true);
    });

    // test to ensure that menu changes visibility when the menu icon is clicked
    it('menu changes visibility when the menu icon is clicked', function() {
      const bodyElement = document.querySelector('body');
      const menuIcon = document.querySelector('.menu-icon-link');
      menuIcon.click();
      expect(bodyElement.classList.contains('menu-hidden')).toBe(false);
      menuIcon.click();
      expect(bodyElement.classList.contains('menu-hidden')).toBe(true);
    });
  });

  //test suite named : Initial Entries
  describe('Initial Entries', function() {

    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    //test to ensure atleast one entry is present within the feed container
    it('completes its work', function() {
      const feed = document.querySelector('.feed').querySelectorAll('.entry');
      expect(feed.length > 0).toBe(true);
    });

  });

  // test suite named: New Feed Selection
  describe('New Feed Selection', function() {
    const feed = document.querySelector('.feed');
    const initialFeed = [];

    beforeEach(function(done) {
      loadFeed(0);
      Array.from(feed.children).forEach(function(feedEntry) {
        initialFeed.push(feedEntry.innerText);
      });
      loadFeed(1, function() {
        done();
      });
    });
    // test to ensure that when a new feed is loaded by loadFeed function that the content actually changes.
    it('new feeds loaded by loadFeed that actually changes the content', function() {
      Array.from(feed.children).forEach(function(feedEntry, index) {
        expect(initialFeed[index]).not.toBe(feedEntry.innerText);
      });
    });
  });

}());
