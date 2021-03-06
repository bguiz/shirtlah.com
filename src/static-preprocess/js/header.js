'use strict';

module.exports = {
  renderWordCloudCoverImage: renderWordCloudCoverImage,
  getWordList: getWordList,
};

function renderWordCloudCoverImage() {
  if (!window.wordcloudConfig) {
    console.error('No word cloud config');
  }
  else if (!window.WordCloud) {
    console.error('No word cloud library')
  }
  else if (!window.WordCloud.isSupported) {
    console.error('Word cloud not supported');
  }
  else if (!window.wordcloudConfig.image) {
    // only render word cloud if there is no cover image
    var canvas = document.getElementById('wordcloud');
    canvas.width = window.wordcloudConfig.canvasWidth;
    canvas.height = window.wordcloudConfig.canvasHeight;
    var width = canvas.width;
    drawWordCloud({
      gridSize: Math.round(8 * width / 1024),
      weightFactor: function (size) {
        return 16 * Math.pow(size, 1.15) * width / 1024;
      },
      fontFamily: 'Roboto, sans-serif',
      color: function (word, weight) {
       return 'hsl(' +
          (Math.random() * 20 + 5).toFixed() + ',' +
          (Math.random() * 20 + (50 - Math.pow(weight, 2))).toFixed() + '%,' +
          (Math.random() * 20 + (50 - Math.pow(weight, 2))).toFixed() + '%)';
      },
      rotateRatio: 0.75,
      backgroundColor: '#481818',
      list: getWordList(),
    });
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
    var coverImage = document.querySelector('.main-header');
    if (coverImage && ctx && typeof ctx.createRadialGradient === 'function') {
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
      var pngDataUrl = canvas.toDataURL('image/png');
      coverImage.style['background-image'] = 'url('+pngDataUrl+')';
    }
  }
}

function getWordList() {
  return [
    ["Lah!", 6],
    ["Leh!", 5],
    ["Lor!", 5],
    ["Meh?", 5],
    ["walao eh", 4],
    ["huat ah", 1],
    ["bo pian", 1],
    ["stupiak", 1],
    ["blur like sotong", 1],
    ["referee kayu", 1],
    ["ah bo den",1],
    ["arbuthen",2],
    ["ok ah",1],
    ["tekan",1],
    ["hantam",1],
    ["corright",1],
    ["talk cock",3],
    ["can or not",1],
    ["buay tahan",3],
    ["jia lat",1],
    ["go where",1],
    ["stylo milo",3],
    ["alamak",2],
    ["kanasai",1],
    ["bo liao",1],
    ["cockanathan",1],
    ["steady steady",1],
    ["bom pipi",1],
    ["powderful",1],
    ["rilak one korner",2],
    ["chope",1],
    ["hentak kaki",1],
    ["langgar",1],
    ["gabra",1],
    ["kilat",1],
    ["kaypoh",2],
    ["anyhow whack",2],
    ["spoil market",1],
    ["chao keng",1],
    ["siol ah",1],
    ["got meh",1],
    ["horlan liao",1],
    ["habis lah",1],
    ["kena hantam",1],
    ["kena sai",1],
    ["kena arrowed",1],
    ["heng ah",1],
    ["heck care lah",1],
    ["guai lan",1],
    ["kao pei kao bu",1],
    ["pai seh",1],
    ["kancheong spider",1],
    ["lolek uncer",1],
    ["gold chain uncer",1],
    ["grandfather road",1],
    ["kopitiam",1],
    ["fly kite",2],
    ["oso can",1],
    ["cock eye",1],
    ["angkat bola",1],
    ["balik kampong",1],
    ["kiasu",1],
    ["kiasi",1],
    ["referee kayu",1],
    ["kelong",1],
    ["saboh king",1],
    ["wayang king",1],
    ["paotoh king",1],
    ["pangseh king",1],
    ["pontang king",1],
    ["drama queen",1],
    ["cannot make it",1],
    ["goondu",1],
    ["confirm plus chop",2],
    ["eskew me",2],
    ["karang guni",1],
    ["pakat pakat ah",1],
    ["shag liao",1],
    ["don’ch pray pray",1],
    ["ya ya papaya",1],
    ["song song gao Jurong",1],
    ["huat ah!",2],
    ["simi taiji",1],
    ["neh neh pok",1],
    ["itchy backside",1],
    ["agaration",1],
    ["sia la",1],
    ["lepak",1],
    ["yum seng!",1],
    ["zhun zhun",1],
    ["win liao lor",1],
    ["cheem",1],
    ["powderful siol",1],
    ["I clap for you",1],
    ["barang barang",1],
    ["curry pok",1],
    ["swee ah",1],
    ["bo chup",2]
  ];
}
