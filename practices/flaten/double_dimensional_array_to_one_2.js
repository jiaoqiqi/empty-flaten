'use strict';

function double_to_one(collection) {

  var mergeArray = bulildMergeArray(collection);

  return mergeArray;

}

function bulildMergeArray(collection) {

  var mergeArray = [];

  for (var i = 0; i < collection.length; i++) {
    mergeArray = delReuse(mergeArray, collection[i]);
  }

  return mergeArray;
}

function delReuse(mergeArray, collection) {
  for (var i = 0; i < collection.length; i++) {
    if (judgeSame(mergeArray, collection[i])) {
      mergeArray.push(collection[i]);

    }
  }

  return mergeArray;
}

function judgeSame(mergeArray, flag) {
  for (var i = 0; i < mergeArray.length; i++) {
    if (mergeArray[i] === flag) {
      return false;
    }
  }

  return true;
}

module.exports = double_to_one;
