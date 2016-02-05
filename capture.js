var page = require("webpage").create();

// Dimensions don't really matter but need to be non-zero
var width = 1,
    height = 1,
    url = "https://bl.ocks.org/veltman/raw/63c1ace02b74988fcddf/";

page.viewportSize = { width: width, height: height};

page.open(url, function (status) {

  var waited = 0,
      timeout = 1200000,
      interval = 100;

  // Wait until the base64 is ready
  setInterval(function() {

    waited += interval;

    var base64 = page.evaluate(function(){

      return phantomReady;

    });

    if (base64) {

      // Write base64 to stdout for decoding
      console.log(base64);

      phantom.exit();

    } else if (waited > timeout) {

      // Give up, something's wrong
      require("system").stderr.write("Maximum timeout of "+Math.round(timeout/1000)+"s exceeded.\n");
      phantom.exit();

    }

  },interval);

});
