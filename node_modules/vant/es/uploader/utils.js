import { createNamespace, isFunction } from '../utils';
var [name, bem, t] = createNamespace('uploader');
export { name, bem, t };
export var toArray = item => Array.isArray(item) ? item : [item];
export function readFileContent(file, resultType) {
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
export function isOversize(items, maxSize) {
  return toArray(items).some(item => {
    if (item.file) {
      if (isFunction(maxSize)) {
        return maxSize(item.file);
      }

      return item.file.size > maxSize;
    }

    return false;
  });
}
export function filterFiles(items, maxSize) {
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
export var isImageUrl = url => IMAGE_REGEXP.test(url);
export function isImageFile(item) {
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