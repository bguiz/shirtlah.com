'use strict';

var header = require('./header');
var analytics = require('./analytics');
var social = require('./social');

jQuery(function($) {
  analytics.initAnalytics();
  social.shareDynamic();
  header.renderWordCloudCoverImage();
});
