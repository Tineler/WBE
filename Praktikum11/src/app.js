"use strict";

$(function() {

	var taskList;

	taskList = new TaskList();
	taskList.createTask("Setup todo list");
	taskList.createTask("Buy milk");
	taskList.createTask("Read recipe");
	taskList.createTask("Invite guests");


    $('#taskList').on('change', ':checkbox', function() {
        var $that = $(this);
        $(this).parent().slideUp("medium", function() {
            if ($that.prop('checked')) {
                $that.attr("checked", "checked");
                $that.next().addClass('finished');
                $that.parent().appendTo($('#taskList ul'));
            }
            else {
                $that.removeAttr('checked');
                $that.next().removeClass('finished');
                $that.parent().prependTo($('#taskList ul'));
            }
            
            $(this).slideDown("medium");
        });
	});

    $( document ).ready(function() {
        $("#taskList").append(taskList.render());
    });

	console.log('Application successfully initialized');
});
