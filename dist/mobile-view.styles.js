'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: ', 'px;\n    height: ', 'px;\n    border: thin solid ', ';\n    border-radius: ', 'px;\n    overflow: hidden;\n    position: relative;\n    background-color: ', ';\n    display: flex;\n    flex-flow: column wrap;\n\n    .top-border {\n      height: ', 'px;\n      width: 100%;\n      background-color: ', ';\n      position: relative;\n\n      .top-border--opts {\n        display: flex;\n        flex-flow: row nowrap;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        top: ', 'px;\n        left: 0;\n        right: 0;\n        margin: 0 auto;\n        height: ', 'px;\n        width: 50%;\n        background-color: ', ';\n        border-bottom-left-radius: 5px;\n        border-bottom-right-radius: 5px;\n      }\n\n      .top-border--cam {\n        border-radius: 50%;\n        background-color: ', ';\n        width: ', 'px;\n        height: ', 'px;\n        margin-right: 10px;\n      }\n\n      .top-border--mic {\n        background-color: ', ';\n        width: ', 'px;\n        height: ', 'px;\n        border-radius: 5px;\n      }\n    }\n\n    .screen {\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: space-between;\n      flex: 1;\n\n      .screen--left-border, .screen--right-border {\n        background-color: ', ';\n        width: ', 'px;\n        height: 100%;\n      }\n\n      .screen--center {\n        border: thin solid ', ';\n        border-radius: ', 'px;\n        width: 100%;\n        background-color: ', ';\n      }\n    }\n\n    .remote {\n      height: ', 'px;\n      background-color: ', ';\n      width: 100%;\n    }\n  '], ['\n    width: ', 'px;\n    height: ', 'px;\n    border: thin solid ', ';\n    border-radius: ', 'px;\n    overflow: hidden;\n    position: relative;\n    background-color: ', ';\n    display: flex;\n    flex-flow: column wrap;\n\n    .top-border {\n      height: ', 'px;\n      width: 100%;\n      background-color: ', ';\n      position: relative;\n\n      .top-border--opts {\n        display: flex;\n        flex-flow: row nowrap;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        top: ', 'px;\n        left: 0;\n        right: 0;\n        margin: 0 auto;\n        height: ', 'px;\n        width: 50%;\n        background-color: ', ';\n        border-bottom-left-radius: 5px;\n        border-bottom-right-radius: 5px;\n      }\n\n      .top-border--cam {\n        border-radius: 50%;\n        background-color: ', ';\n        width: ', 'px;\n        height: ', 'px;\n        margin-right: 10px;\n      }\n\n      .top-border--mic {\n        background-color: ', ';\n        width: ', 'px;\n        height: ', 'px;\n        border-radius: 5px;\n      }\n    }\n\n    .screen {\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: space-between;\n      flex: 1;\n\n      .screen--left-border, .screen--right-border {\n        background-color: ', ';\n        width: ', 'px;\n        height: 100%;\n      }\n\n      .screen--center {\n        border: thin solid ', ';\n        border-radius: ', 'px;\n        width: 100%;\n        background-color: ', ';\n      }\n    }\n\n    .remote {\n      height: ', 'px;\n      background-color: ', ';\n      width: 100%;\n    }\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledMobileView = _styledComponents2.default.div(_templateObject, function (_ref) {
  var colors = _ref.colors,
      height = _ref.height,
      width = _ref.width,
      headerWidth = _ref.headerWidth;
  return (0, _styledComponents.css)(_templateObject2, width, height, colors.secondary, width / 10, colors.primary, width / 20, colors.primary, width / 20, headerWidth / 6, colors.primary, colors.cam, headerWidth / 10, headerWidth / 10, colors.secondary, headerWidth / 6, headerWidth / 18, colors.primary, width / 20, colors.secondary, width / 16, colors.screen, width / 20, colors.primary);
});

exports.default = StyledMobileView;