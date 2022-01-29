"use strict";

exports.__esModule = true;
exports.bem = void 0;
exports.filterFiles = filterFiles;
exports.isImageFile = isImageFile;
exports.isImageUrl = void 0;
exports.isOversize = isOversize;
exports.name = void 0;
exports.readFileContent = readFileContent;
exports.toArray = exports.t = void 0;

var _utils = require("../utils");

var [name, bem, t] = (0, _utils.createNamespace)('uploader');
exports.t = t;
exports.bem = bem;
exports.name = name;

var toArray = item => Array.isArray(item) ? item : [item];

exports.toArray = toArray;

function readFileContent(file, resultType) {
  return new Promise(resolve => {
    if (resultType === 'file') {
      resolve();
      return;
    }

    var reader = new FileReader();

    reader.onload = event => {
      resolve(event.target.result);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}

function isOversize(items, maxSize) {
  return toArray(items).some(item => {
    if (item.file) {
      if ((0, _utils.isFunction)(maxSize)) {
        return maxSize(item.file);
      }

      return item.file.size > maxSize;
    }

    return false;
  });
}

function filterFiles(items, maxSize) {
  var valid = [];
  var invalid = [];
  items.forEach(item => {
    if (isOversize(item, maxSize)) {
      invalid.push(item);
    } else {
      valid.push(item);
    }
  });
  return {
    valid,
    invalid
  };
}

var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;

var isImageUrl = url => IMAGE_REGEXP.test(url);

exports.isImageUrl = isImageUrl;

function isImageFile(item) {
  // some special urls cannot be recognized
  // user can add `isImage` flag to mark it as an image url
  if (item.isImage) {
    return true;
  }

  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0;
  }

  if (item.url) {
    return isImageUrl(item.url);
  }

  if (typeof item.content === 'string') {
    return item.content.indexOf('data:image') === 0;
  }

  return false;
}