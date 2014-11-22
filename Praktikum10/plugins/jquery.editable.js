(function($) {

    $.fn.editable = function() {
        return this.each(function() {
            $(this).attr('contenteditable','true');
        });
    }

}(jQuery));