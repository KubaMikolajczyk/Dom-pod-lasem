$(document).ready(function() {

      // Initialize the plugin
      $('#big_room_popup').popup();
      $('#small_room_popup').popup();
      $('#living_room_popup').popup();
      $('#bathroom_popup').popup();

      // Set default `pagecontainer` for all popups (optional, but recommended for screen readers and iOS*)
      $.fn.popup.defaults.pagecontainer = '#page'
    });