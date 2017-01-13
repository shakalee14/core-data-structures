'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Set = function () {
  function Set() {
    _classCallCheck(this, Set);

    this._length = 0;
    this._data = [];
  }

  _createClass(Set, [{
    key: 'cloneTo',
    value: function cloneTo(secondSet) {
      secondSet._length = this._length;
      secondSet._data = this._data;
    }
  }, {
    key: 'add',
    value: function add(item) {
      for (var i = 0; i < this.size(); i++) {
        if (this._data[i] === item) {
          throw new ReferenceError('item being added already exists in this set.');
          return null;
        }
      }

      this._length++;
      this._data.push(item);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this._length === 0;
    }
  }, {
    key: 'contains',
    value: function contains(item) {
      for (var i = 0; i < this.size(); i++) {
        if (this._data[i] === item) {
          return true;
        } else {
          return false;
        }
      }
    }
  }, {
    key: 'remove',
    value: function remove(item) {
      for (var i = 0; i < this.size(); i++) {
        if (this._data[i] === item) {
          this._data.splice(i, 1);
          this._length--;
        }
      }
    }
  }, {
    key: 'forEach',
    value: function forEach(fn) {
      var returnList = [];
      for (var i = 0; i < this.size(); i++) {
        var ele = fn(this._data[i]);
        if (ele) returnList.push(ele);
      }
      if (returnList.length > 0) return returnList;
    }
  }, {
    key: 'size',
    value: function size() {
      return this._length;
    }
  }, {
    key: 'testBothSets',
    value: function testBothSets(otherSet, union) {
      var _this = this;

      var resultSet = new Set();
      this.cloneTo(resultSet);

      otherSet.forEach(function (element) {
        var alreadyInSet = false;
        for (var i = 0; i < _this.size(); i++) {
          if (_this._data[i] === element) {
            alreadyInSet = true;
          }
        }
        if (!alreadyInSet && union || alreadyInSet && !union) {
          resultSet._data.push(element);
        }
      });
      return resultSet._data;
    }
  }, {
    key: 'union',
    value: function union(otherSet) {
      return this.testBothSets(otherSet, true);
    }
  }, {
    key: 'intersect',
    value: function intersect(otherSet) {
      return this.testBothSets(otherSet, false);
    }
  }, {
    key: 'difference',
    value: function difference(otherSet) {
      var resultSet = new Set();
      this.cloneTo(resultSet);

      otherSet.forEach(function (element) {
        for (var i = 0; i < resultSet.size(); i++) {
          if (resultSet._data[i] === element) {
            resultSet.remove(resultSet._data[i]);
          }
        }
      });
      return resultSet._data;
    }
  }, {
    key: 'isSubset',
    value: function isSubset(otherSet) {
      var numMatching = 0;

      var resultSet = new Set();
      this.cloneTo(resultSet);

      resultSet.forEach(function (element) {
        for (var i = 0; i < otherSet.size(); i++) {
          if (otherSet._data[i] === element) {
            numMatching++;
          }
        }
      });
      if (numMatching === resultSet.size()) {
        return true;
      }
      return false;
    }
  }], [{
    key: 'clone',
    value: function clone(set) {
      var newSet = new Set();
      set.cloneTo(newSet);
      return newSet;
    }
  }]);

  return Set;
}();

exports.default = Set;