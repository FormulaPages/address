(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "module", "formula-tocolumn"], factory);
  } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
    factory(exports, module, require("formula-tocolumn"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.toColumn);
    global.ADDRESS = mod.exports;
  }
})(this, function (exports, module, _formulaTocolumn) {
  "use strict";

  module.exports = ADDRESS;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _toColumn = _interopRequireDefault(_formulaTocolumn);

  function ADDRESS(row, col, absolute_relative_mode, use_a1_notation, sheet) {
    switch (absolute_relative_mode) {
      case 0:
        return (0, _toColumn["default"])(col - 1) + row.toString();
      case 2:
        return (0, _toColumn["default"])(col - 1) + "$" + row.toString();
      case 3:
        return "$" + (0, _toColumn["default"])(col - 1) + row.toString();
      default:
        return "$" + (0, _toColumn["default"])(col - 1) + "$" + row.toString();
    }
  }
});
