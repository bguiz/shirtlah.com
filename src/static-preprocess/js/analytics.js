'use strict';

module.exports = {
  initAnalytics: initAnalytics,
  doScrollAnalytics: doScrollAnalytics,
  doCallToActionAnalytics: doCallToActionAnalytics,
};

var analytics;

function initAnalytics() {
  switch (document.location.hostname) {
    case 'localhost': case '127.0.0.1': case '0.0.0.0':
      analytics = function localhostAnalytics() {
        console.log(JSON.stringify(arguments));
      };
      break;
    default:
      analytics = window.ga;
  }

  return analytics;
}

function ensureAnalyticsFn(analyticsFn) {
  analyticsFn = analyticsFn || analytics;
  if (typeof analyticsFn !== 'function') {
    throw 'Failed to initialise analytics - function not present';
  }
  return analyticsFn;
}

function ensureAsyncAnalyticsFn(analyticsFn) {
  analyticsFn = ensureAnalyticsFn(analyticsFn);
  return function asyncAnalyticsFn() {
    var args = arguments;
    window.setTimeout(function() {
      analyticsFn.apply(undefined, args);
    }, 0);
  }
}

function doCallToActionAnalytics(analyticsFn) {
  analyticsFn = ensureAsyncAnalyticsFn(analyticsFn);
  var emailInputElement = document.querySelector('.mailchimp-slim input.email');
  var emailSubmitElement = document.querySelector('.mailchimp-slim input.button');

  document.querySelector('.floating-cta-button').addEventListener('click', function onClickSignUpButton() {
    analyticsFn('send', 'event', 'CallToAction','Navigate', 'ClickSignup');
  });
  emailInputElement.addEventListener('focus', function onFocusEmailInput() {
    analyticsFn('send', 'event', 'CallToAction', 'Signup', 'Focus');
  });
  emailInputElement.addEventListener('blur', function onBlurEmailInput() {
    analyticsFn('send', 'event', 'CallToAction', 'Signup', 'Blur') ;
  });
  emailSubmitElement.addEventListener('click', function onClickEmailSubmit() {
    analyticsFn('send', 'event', 'CallToAction', 'Signup', 'Submit') ;
  });
}

function doScrollAnalytics(analyticsFn) {
  analyticsFn = ensureAsyncAnalyticsFn(analyticsFn);

  var scrollListenerDebounceMs = 150;
  var minScrollBeforeTrack = 150;
  var scrollListenerDebounceTimer = 0;

  var timeOfPageLoad = (new Date()).getTime();
  var durationTotal = 0;
  var hasScrolledPageStart = false;
  var timeOfScrollPageStart;
  var durationScrollPageStart;
  var hasScrolledContentMidway = false;
  var timeOfScrollContentMidway;
  var durationScrollContentMidway;
  var hasScrolledContentEnd = false;
  var timeOfScrollContentEnd;
  var durationScrollContentEnd;
  var hasScrolledPageEnd = false;
  var timeOfScrollPageEnd;
  var durationScrollPageEnd;

  var contentElement = document.querySelector('.post-content');
  contentElement = contentElement || document.querySelector('.content');

  analyticsFn('send', 'event', 'Reading', 'PageLoadedTime', '', Math.round(timeOfPageLoad / 1000));

  $(window).scroll(debounceScrollHandler);

  function debounceScrollHandler() {
    // De-bounce
    if (scrollListenerDebounceTimer) {
      clearTimeout(scrollListenerDebounceTimer);
    }
    scrollListenerDebounceTimer = setTimeout(trackScrolling, scrollListenerDebounceMs);
  }

  function trackScrolling() {
    var bottom = $(window).height() + $(window).scrollTop();
    var height = $(document).height();

    if (!hasScrolledPageStart && bottom > minScrollBeforeTrack) {
      // Start of page
      timeOfScrollPageStart = (new Date()).getTime();
      durationScrollPageStart = Math.round((timeOfScrollPageStart - timeOfPageLoad) / 1000);
      durationTotal = durationScrollPageStart;

      analyticsFn('send', 'event', 'Reading', 'PageStart', '', durationScrollPageStart);
      hasScrolledPageStart = true;
    }

    if (!!contentElement && !hasScrolledContentEnd) {
      // Midway or end of content
      var rect = contentElement.getBoundingClientRect();
      var contentTop = rect.top + document.body.scrollTop;
      var contentBottom = contentTop + rect.height;
      if (bottom > contentBottom) {
        timeOfScrollContentEnd = (new Date()).getTime();
        durationScrollContentEnd = Math.round((timeOfScrollContentEnd - timeOfPageLoad) / 1000);
        durationTotal = durationScrollContentEnd;

        analyticsFn('send', 'event', 'Reading', 'ContentEnd', '', durationScrollContentEnd);
        setReaderCategory();
        hasScrolledContentEnd = true;
      }
      else if (!hasScrolledContentMidway && bottom > contentTop + (rect.height * 0.5)) {
        timeOfScrollContentMidway = (new Date()).getTime();
        durationScrollContentMidway = Math.round((timeOfScrollContentMidway - timeOfPageLoad) / 1000);
        durationTotal = durationScrollContentMidway;

        analyticsFn('send', 'event', 'Reading', 'ContentMidway', '', durationScrollContentMidway);
        hasScrolledContentMidway = true;
      }
    }

    if (!hasScrolledPageEnd && bottom >= height) {
      // Bottom of page
      timeOfScrollPageEnd = (new Date()).getTime();
      durationScrollPageEnd = Math.round((timeOfScrollPageEnd - timeOfPageLoad) / 1000);
      durationTotal = durationScrollPageEnd;

      analyticsFn('send', 'event', 'Reading', 'PageEnd', '', durationScrollPageEnd);
      setReaderCategory();
      hasScrolledPageEnd = true;
    }
  }

  function setReaderCategory() {
    var cat;
    if (durationTotal < 60) {
      cat = 'Skim';
    }
    else {
      cat = 'Thorough';
    }
    analyticsFn('set', 'dimension1', cat);
  }
}
