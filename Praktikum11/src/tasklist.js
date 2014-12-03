"use strict";

//
//  A TaskList has a title and an array of tasks
//
function TaskList(title) {
	this.id = null;
	this.tasks = [];
	this.title = title || "";
}


//
//  Returns number of tasks in a TaskList
//
TaskList.prototype.size = function() {
	return this.tasks.length;
};


//
//  Create a new task and ad it to the TaskList
//
TaskList.prototype.createTask = function(title) {
	var _task = new Task(title);
	this.tasks.push(_task);
	return _task;
};


//
//  Render a TaskList
//
TaskList.prototype.render = function() {
    var $ul = $("<ul>");

    $.each(this.tasks, function( index, task ) {
        $ul.append(task.render());
    });

    return $ul;
}
