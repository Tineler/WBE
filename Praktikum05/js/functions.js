$(function() {
    $('#newtask').on('keypress', function(e) {
        if (e.charCode === 13) {
            saveTask();

            e.preventDefault();
        }
    });

    $('#save-button').on('click', function(e) {
        saveTask();

        e.preventDefault();
    });

    $("#select-theme").bind( "change", function(event, ui) {
        var theme = $(this).val();
        // this selector gets all the pages.
        $(":jqmData(role=page)").each( function() {
            // first we need to remove the possible classes set to the page.
            $(this).removeClass('ui-body-a ui-body-b ui-page-theme-a ui-page-theme-b')
            // add the new class and change the data-theme-attribute.
            $(this).addClass('ui-body-' + theme).attr('data-theme', theme);
        });
    });

    function saveTask() {
        var label = $('<label>');
        var input = $('<input>').attr({'type':'checkbox', 'class':'done'});
        label.append(input);
        label.append($('#newtask').val());

        $('#tasklist').append($('<li>').append(label));

        $('#newtask').val("");
        // trigger create-event for getting jQuery to style new created elements.
        $('#tasklist').trigger("create");
    }
});
