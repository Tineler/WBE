'use strict';
// Modul(e) einbinden
const
    events = require('events'),
    util = require('util');

// LineStreamReader-Konstruktor definieren
var LineStreamReader = function(stream) {
    events.EventEmitter.call(this);
    var data = '';
    var that = this;

    // inklusive Handler für die Stream-Events
    stream.on('data', handleData);
    stream.on('end', onEnd);
    stream.setEncoding('utf8');

    function handleData(chunk) {
        var lines = chunk.split(/\r?\n/);

        lines.forEach(function (elem) {
            data += elem;
            that.emit('line', data);
            data = '';
        });
    }

    function onEnd() {
        if (data.length > 0) {
            that.emit('line', data);
            data = '';
        }
    }
};

// LineStreamReader erbt von events.EventEmitter
util.inherits(LineStreamReader, events.EventEmitter);


function connect (stream) {
  return new LineStreamReader(stream);
}

// Funktion connect exportieren
exports.connect = connect;