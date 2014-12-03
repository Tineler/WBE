"use strict";

//
//  Tasks have done and title attributes
//
function Task(title) {
	this.done = false;
	this.title = title || "";
}


//
//  Render a task
//
Task.prototype.render = function() {
    var $li = $("<li>");
    var $checkbox = $("<input>", {
        name: "done",
        type: "checkbox",
        checked: this.done
    });
    var $text = $("<input>", {
        name: "title",
        type: "text",
        value: this.title
    });

    $li.append($checkbox);
    $li.append($text);

    return $li;
}
