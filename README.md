# headless-gif

Saving web worker'd gif via PhantomJS.

Slight modification to the original page converts the gif result to a base64 global for PhantomJS ([example](https://bl.ocks.org/veltman/63c1ace02b74988fcddf)).

PhantomJS grabs that and sends to stdout.  Decode that and then have a gif party.

```
$ phantomjs capture.js | base64 --decode > what-a-cool.gif
```

See: https://twitter.com/ivarvong/status/695682484554637312
