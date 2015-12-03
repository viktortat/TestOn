"use strict";

/**
 * Created by Admin on 03.12.2015.
 */

var a ={
    prop: 1,
    f: function () {
        console.log(this.prop);
    }
},
    b={
        prop: 2,
        f: function () {
            console.log(this.prop);
        }
    }

var newFunc = a.f.bind(b);
newFunc();








































