

$(function() {

    var hashLocation = false;

    if (location.hash) {
        var newHash = (location.hash).slice(1, location.hash.indexOf("_hash"));
        hashLocation = document.getElementById(newHash);

        setTimeout(function() {
            hashLocation = document.getElementById(newHash);
        }, 1);
      }

      if (hashLocation) {
        // additional timeout for cross browser functionality
          setTimeout(function() {
              $('html, body').animate({'scrollTop': $(hashLocation).position().top}, 'slow');
          }, 100);
        };
});
