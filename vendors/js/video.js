$('#video').popup({
  // Option 1: `detach:true` will remove video from DOM and stop the playback after closing popup. You can use this option if video player has no playback API.
  detach: true,
  onclose: function () {
    // Option 2: Using YouTube API. `?enablejsapi=1` needs to be added to the iframe src.
    $('.embed-iframe').each(function(){
      this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });

    // Option 3: Using HTML5 <video>.
    // $("video").each(function() {
    //   this.pause()
    // });
  }
});