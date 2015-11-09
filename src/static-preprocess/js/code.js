'use strict';

var header = require('./header');
var analytics = require('./analytics');
var social = require('./social');

jQuery(function($) {
  analytics.initAnalytics();
  analytics.doScrollAnalytics();
  analytics.doCallToActionAnalytics();
  social.shareDynamic();
  header.renderWordCloudCoverImage();
});
