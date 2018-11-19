# Feed Reader Testing Project

Feed Reader Testing Project includes testing of a web-based application. And Jasmine is used to write the test cases for testing.

## Table of Contents

-   [Run on Local Machine](#run-on-local-machine)
-   [Test Cases](#testcases)

## Run on Local Machine

-   Run [index.html](index.html) file in the repository.

## Test Cases

1. Test suite named `"RSS Feeds"`.
   -   Test ensures that the `allFeeds` variable is defined and it is not empty.
   -   Test loops through each feed in the `allFeeds` object and ensures it has a URL defined and    that the URL is not empty.
   -   Test loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
2. Test suite named `"The menu"`.
   -  Test ensures the menu element is hidden by default.
   -  Test ensures the menu changes visibility when the menu icon is clicked.
3. Test suite named `"Initial Entries"`.
   -  Test ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element   within the `.feed` container.
4. Test suite named `"New Feed Selection"`.
   -  Test ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

`Note:`
      1. No test should be dependent on the results of another.
      2. When complete - all of the tests should pass.
