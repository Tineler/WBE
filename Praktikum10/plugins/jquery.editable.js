(function($) {
    "use strict";
    $.fn.editable = function(options) {

        var options = $.extend({
            save: function(el) {}
        }, options || {});

        var onBlur = function(element, value) {

            if (value == null) {
                value = $(element).val().trim().replace(/\n/g,"<br>");
            }
            var $p = $("<p>", {
                class: "editable",
                html: value
            });
            $(element).replaceWith($p);
            while($p.next("button").length > 0) {
                $p.next("button").remove();
            }
            $p.on("click", switchToInput);
        };

        var switchToInput = function() {
            var oldValue = $(this).html().trim();
            var $input = $("<textarea>", {
                val: oldValue.replace(/<br>/g, "\n")
            });
            $(this).replaceWith($input);
            $input.focus();

            var $buttonCancel = $("<button>", {
                text: "Cancel",
                class: "cancel"
            });
            $input.after($buttonCancel);
            $buttonCancel.click(function() {
                onBlur($input[0], oldValue);
            });

            var $buttonSave = $("<button>", {
                text: "Save",
                class: "save"
            });
            $input.after($buttonSave);
            $buttonSave.click(function() {
                options.save($input[0]);
                onBlur($input[0]);
            });
        };

        return this.each(function() {
            if(this.tagName == "P") {
                $(this).on("click", switchToInput);
            }
        });
    }

}(jQuery));