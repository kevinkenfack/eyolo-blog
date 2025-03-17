(function ($) {
    "use strict";
    
    
    var scrollLink = $('.nav-link');
    scrollLink.on("click", function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                    scrollTop: target.offset().top
                }, 500, "easeInOutExpo");
                return false;
            }
        }
    });
    
})(jQuery);
