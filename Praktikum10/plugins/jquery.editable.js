(function($) {
    "use strict";
    $.fn.editable = function(options) {

        var options = $.extend({
            save: function(el) {}
        }, options || {});

        var onBlur = function(element, value) {
            if (value == null) {
                value = $(element).val().trim().replace(/\n/g,"<br>").replace(/ /g, "&nbsp;");
            }

            if (!value) {
                value = "&nbsp;";
            }
            var parent = $(element).parent();
            parent.empty();
            parent.html(value);
            parent.on("click", switchToInput);
        };

        var switchToInput = function() {
            $(this).unbind("click");
            var oldValue = $(this).html().trim();
            $(this).empty();
            var $input = $("<textarea>", {
                val: oldValue.replace(/<br>/g, "\n").replace(/&nbsp;/g, " ")
            });
            $(this).append($input);
            $input.focus();

            var $buttonCancel = $("<button>", {
                text: "Cancel",
                class: "cancel"
            });
            $(this).append($buttonCancel);
            $buttonCancel.click(function(event) {
                event.stopPropagation();
                onBlur($input[0], oldValue);
            });

            var $buttonSave = $("<button>", {
                text: "Save",
                class: "save"
            });
            $(this).append($buttonSave);
            $buttonSave.click(function(event) {
                event.stopPropagation();
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