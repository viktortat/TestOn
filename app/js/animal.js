"use strict";

/**
 * Created by Admin on 03.12.2015.
 */

    var Animal = function () {
    this.name = "";
    this.legCount = 0;
    this.feed = function (food) {
        console.log(this.name + ' fed ' + food)
    };
};