'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobileView = require('./mobile-view.styles');

var _mobileView2 = _interopRequireDefault(_mobileView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  children: _propTypes2.default.node.isRequired,
  colors: _propTypes2.default.shape({
    primary: _propTypes2.default.string,
    secondary: _propTypes2.default.string,
    cam: _propTypes2.default.string,
    screen: _propTypes2.default.string
  }),
  width: _propTypes2.default.number,
  height: _propTypes2.default.number
};

var defaultProps = {
  colors: {
    primary: '#000',
    secondary: '#aaa',
    cam: '#aaa',
    screen: '#fff'
  },
  width: 100,
  height: 230
};

var MobileViewComponent = function MobileViewComponent(_ref) {
  var children = _ref.children,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 230 : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 100 : _ref$width,
      _ref$colors = _ref.colors,
      colors = _ref$colors === undefined ? {} : _ref$colors,
      props = _objectWithoutProperties(_ref, ['children', 'height', 'width', 'colors']);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      headerRef = _useState2[0],
      setHeaderRef = _useState2[1];

  var getHeaderRef = (0, _react.useCallback)(function (node) {
    setHeaderRef(node);
  }, []);

  var colorsSchema = (0, _react.useMemo)(function () {
    return _extends({
      primary: '#000',
      secondary: '#aaa',
      cam: '#aaa',
      screen: '#fff'
    }, colors);
  }, [colors]);

  return _react2.default.createElement(
    _mobileView2.default,
    _extends({
      height: height,
      width: width,
      headerWidth: headerRef ? headerRef.offsetWidth : 0,
      colors: colorsSchema
    }, props),
    _react2.default.createElement(
      'div',
      { className: 'top-border' },
      _react2.default.createElement(
        'div',
        { className: 'top-border--opts', ref: getHeaderRef },
        _react2.default.createElement('div', { className: 'top-border--cam' }),
        _react2.default.createElement('div', { className: 'top-border--mic' })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'screen' },
      _react2.default.createElement('div', { className: 'screen--left-border' }),
      _react2.default.createElement(
        'div',
        { className: 'screen--center' },
        children
      ),
      _react2.default.createElement('div', { className: 'screen--right-border' })
    ),
    _react2.default.createElement('div', { className: 'remote' })
  );
};

MobileViewComponent.propTypes = propTypes;
MobileViewComponent.defaultProps = defaultProps;

exports.default = MobileViewComponent;