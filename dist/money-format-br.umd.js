(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["money-format-br"] = {}));
})(this, (function (exports) { 'use strict';

  /**
   * function that formats a value for the Brazilian money standard
   * @param {number} money
   * @returns {string}
   */
  function moneyFormatBR(money) {
    return money.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }
  var src = {
    moneyFormatBR: moneyFormatBR
  };
  var src_1 = src.moneyFormatBR;

  exports["default"] = src;
  exports.moneyFormatBR = src_1;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
