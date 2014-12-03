"use strict";

$(function() {

	var taskList;

	taskList = new TaskList();
	taskList.createTask("Setup todo list");
	taskList.createTask("Buy milk");
	taskList.createTask("Read recipe");
	taskList.createTask("Invite guests");


    $('#taskList').on('change', ':checkbox', function() {
	
	});

    $( document ).ready(function() {
        $("#taskList").append(taskList.render());
    });

	console.log('Application successfully initialized');
});
