'use strict';

module.exports = {
  shareDynamic: shareDynamic,
};

function shareDynamic() {
  var groups = document.querySelectorAll('.share-dynamic');
  if (!groups || groups.length < 1) {
    return;
  }
  var url = encodeURIComponent(window.location.href);
  //TODO get proper media URL
  var mediaUrl = encodeURIComponent('http://shirtlah.com/images/shirtlah-logo-300x300.png');
  for (var idx = 0; idx < groups.length; ++idx) {
    var group = groups[idx];
    var input = group.querySelector('.input');
    var data = {
      input: input,
      twitter: group.querySelector('.twitter'),
      facebook: group.querySelector('.facebook'),
      // pinterest: group.querySelector('.pinterest'),
      // googleplus: group.querySelector('.googleplus'),
    };
    inputChanged(data);
    input.addEventListener('input', inputChanged.bind(undefined, data));
  }

  function inputChanged(data) {
    var content = encodeURIComponent(data.input.value);
    data.twitter.href = 'https://twitter.com/share?text='+content+'&url='+url;
    data.facebook.href = 'https://www.facebook.com/sharer/sharer.php?u='+url+'&t='+content;
    // data.pinterest.href =
    //   'http://pinterest.com/pin/create/button/?url='+url+
    //   '{{ if .Params.pinterestmedia }}&amp;media='+mediaUrl+'&amp;description='+content;
    // data.googleplus.href = 'https://plus.google.com/share?url='+url;
  }
}

