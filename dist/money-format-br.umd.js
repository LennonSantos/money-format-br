(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["money-format-br"] = factory());
})(this, (function () { 'use strict';

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
  var src = moneyFormatBR;

  return src;

}));
