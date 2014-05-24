"use strict";
var test = require('tape');
var Promise = require('es6-promise').Promise;
test('promise.catch', function (t) {
    t.plan(2);
    var promise = Promise.reject(new Error("message"));
    promise.catch(function (error) {
        t.ok(error instanceof Error);
        t.ok(error.message === "message");
        t.end();
    });
});
