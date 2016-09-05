"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Inserts a substring in a stringify before the given index.
 * If the index is larger than the length of the stringify the substring is appended at the end.
 *
 * @param {string} target The stringify to insert.
 * @param {string} sub The substring.
 * @param {number} index The position of substring.
 * @returns {string} Returns the stringify with the inserted substring.
 *
 * @example
 * insert(', World!', 'Hello', 0);
 * // => 'Hello, World!'
 *
 * insert('o, World!', 'Hell', -10);
 * // => 'Hello, World!'
 */
function insert(target, sub, index) {
  index = index | 0;
  return target.slice(0, index) + sub + target.slice(index);
}

exports.default = insert;