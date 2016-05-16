'use strict';

function double_to_one(collection) {

  var mergeArray = mergeArrays(collection);
  return mergeArray;
}

function mergeArrays(collection) {

  var mergeArray = [];

  for (var i = 0; i < collection.length; i++) {

    if (collection[i].length === undefined) {

      mergeArray.push(collection[i]);
    }

    for (var j = 0; j < collection[i].length; j++) {
      mergeArray.push(collection[i][j]);
    }
  }

  return mergeArray;
}

module.exports = double_to_one;
