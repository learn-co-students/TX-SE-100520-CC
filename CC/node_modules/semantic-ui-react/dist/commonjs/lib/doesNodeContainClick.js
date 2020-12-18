'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inRange2 = require('lodash/inRange');

var _inRange3 = _interopRequireDefault(_inRange2);

var _first3 = require('lodash/first');

var _first4 = _interopRequireDefault(_first3);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _some2 = require('lodash/some');

var _some3 = _interopRequireDefault(_some2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Determines if a click's coordinates are within the bounds of a node.
 *
 * @see https://github.com/Semantic-Org/Semantic-UI-React/pull/2384
 *
 * @param {object} node - A DOM node.
 * @param {object} e - A SyntheticEvent or DOM Event.
 * @returns {boolean}
 */
var doesNodeContainClick = function doesNodeContainClick(node, e) {
  if ((0, _some3.default)([e, node], _isNil3.default)) return false;

  // first check if the node contains the e.target, simplest use case
  if (node.contains(e.target)) return true;

  // return early if the event properties aren't available
  // prevent measuring the node and repainting if we don't need to
  var clientX = e.clientX,
      clientY = e.clientY;

  if ((0, _some3.default)([clientX, clientY], _isNil3.default)) return false;

  // false if the node is not visible
  var clientRects = node.getClientRects();
  // Heads Up!
  // getClientRects returns a DOMRectList, not an array nor a plain object
  // We explicitly avoid _.isEmpty and check .length to cover all possible shapes
  if (!node.offsetWidth || !node.offsetHeight || !clientRects || !clientRects.length) return false;

  // false if the node doesn't have a valid bounding rect

  var _first2 = (0, _first4.default)(clientRects),
      top = _first2.top,
      bottom = _first2.bottom,
      left = _first2.left,
      right = _first2.right;

  if ((0, _some3.default)([top, bottom, left, right], _isNil3.default)) return false;

  // we add a small decimal to the upper bound just to make it inclusive
  // don't add an whole pixel (1) as the event/node values may be decimal sensitive
  return (0, _inRange3.default)(clientY, top, bottom + 0.001) && (0, _inRange3.default)(clientX, left, right + 0.001);
};

exports.default = doesNodeContainClick;