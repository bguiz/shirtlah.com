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
  var ctx = canvas.getContext('2d');
  if (ctx && typeof ctx.createRadialGradient === 'function') {
    var w = canvas.width;
    var h = canvas.height;
    var gradient = ctx.createRadialGradient(
      w * 0.5,
      h * 0.5,
      h * 0.1,
      w * 0.5,
      h * 0.5,
      w * 0.5);
    gradient.addColorStop(0.0, 'rgba(240,0,0,0.5)');
    gradient.addColorStop(0.2, 'rgba(240,0,0,0.4)');
    gradient.addColorStop(0.7, 'rgba(240,0,0,0.1)');
    gradient.addColorStop(1.0, 'rgba(0,  0,0,0.3)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,w,h);
  }
  var pngDataUrl = canvas.toDataURL('image/png');
  $('.main-header').css('background-image', 'url('+pngDataUrl+')');
}
