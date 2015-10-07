'use strict';

if (!window.WordCloud) {
  console.error('No word cloud library')
}
else if (!window.WordCloud.isSupported) {
  console.error('Word cloud not supported');
}

function drawWordCloud(options) {
  var canvas = document.getElementById('wordcloud');
  if (!canvas) {
    console.error('No canvas found');
    return;
  }
  options = options || { list: [] };
  if (typeof options === 'string') {
    options = eval("options="+options.trim());
  }
  canvas.addEventListener('wordclouddrawn', onWordCloudDrawn);
  canvas.addEventListener('wordcloudstart', onWordCloudStart);
  canvas.addEventListener('wordcloudstop', onWordCloudStop);
  canvas.addEventListener('wordcloudabort', onWordCloudAbort);
  window.WordCloud(canvas, options);
}

function onWordCloudDrawn(evt) {
}

function onWordCloudStart(evt) {
}

function onWordCloudAbort(evt) {
}

function onWordCloudStop(evt) {
  var canvas = document.getElementById('wordcloud');
  var pngDataUrl = canvas.toDataURL('image/png');
  console.log('png', pngDataUrl);
  $('.main-header').css('background-image', 'url('+pngDataUrl+')');
}
