$(document).ready(function() {
    
    /************************
    ***  CONTENT POPUP ******
    *************************/

      // Initialize the plugin
      $('#big_room_popup').popup({
           color: 'white',
           opacity: 1,
           transition: '0.3s',
           scrolllock: true
      });
      $('#small_room_popup').popup({
           color: 'white',
           opacity: 1,
           transition: '0.3s',
           scrolllock: true
      });
      $('#living_room_popup').popup({
           color: 'white',
           opacity: 1,
           transition: '0.3s',
           scrolllock: true
      });
      $('#bathroom_popup').popup({
           color: 'white',
           opacity: 1,
           transition: '0.3s',
           scrolllock: true
      });

      // Set default `pagecontainer` for all popups (optional, but recommended for screen readers and iOS*)
      $.fn.popup.defaults.pagecontainer = '#page'
       
    
    });