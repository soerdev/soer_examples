"use strict";
console.log('START');
var MaxTemperature = /** @class */ (function () {
    function MaxTemperature() {
    }
    MaxTemperature.prototype.zero = function () {
        return [0, 0];
    };
    MaxTemperature.prototype.isZero = function (v) {
        return v[0] === 0 && v[1] === 0;
    };
    MaxTemperature.prototype.op = function (a, b) {
        if (this.isZero(a)) {
            return b;
        }
        if (this.isZero(b)) {
            return a;
        }
        return a[1] > b[1] ? a : b;
    };
    return MaxTemperature;
}());
var MySet = /** @class */ (function () {
    function MySet(init) {
        this.values = init;
        console.log('???', this.values);
    }
    MySet.prototype.reduce = function (monoid) {
        var result = monoid.zero();
        for (var i = 0; i < this.values.length; i++) {
            result = monoid.op(result, this.values[i]);
        }
        return result;
    };
    return MySet;
}());
var s = new MySet([[1, 200], [2, 300], [3, 250]]);
console.log(s.reduce(new MaxTemperature()));
