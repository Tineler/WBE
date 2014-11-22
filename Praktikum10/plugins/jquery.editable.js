(function($) {
    "use strict";
    $.fn.editable = function(options) {

        var options = $.extend({
            save: function() {}
        }, options || {});

        var switchToP = function() {
            var $p = $("<p>", {
                class: "editable",
                html: $(this).val().trim().replace(/\n/g,"<br>")
        });
            $(this).replaceWith($p);
            $p.on("click", switchToInput);
        };

        var switchToInput = function() {
            var $input = $("<textarea>", {
                val: $(this).html().trim().replace(/<br>/g, "\n")
            });
            $(this).replaceWith($input);
            $input.focus();
            $input.on("blur", switchToP);
        };

        return this.each(function() {
            if(this.tagName == "P") {
                $(this).on("click", switchToInput);
            }
        });
    }

}(jQuery));