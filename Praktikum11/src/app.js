"use strict";

$(function() {

	var taskList;

	// code placed here will be executed each time the page
	// is rendered

	// create a tasklist to display
	taskList = new TaskList();
	taskList.createTask("Setup todo list");
	taskList.createTask("Buy milk");
	taskList.createTask("Read recipe");
	taskList.createTask("Invite guests");
	//taskList.tasks[0].done = true;


  $('#taskList').on('change', ':checkbox', function() {
	
	});

	console.log('Application successfully initialized');
	

});
