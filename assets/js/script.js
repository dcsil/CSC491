(function ($) {
  'use strict';

  $("table").addClass("table");

  // Background-images
  $('[data-background]').each(function () {
      $(this).css({
          'background-image': 'url(' + $(this).data('background') + ')',
      });
  });

})(jQuery);
