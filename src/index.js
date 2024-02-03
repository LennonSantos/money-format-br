/**
 * function that formats a value for the Brazilian money standard
 * @param {number} money
 * @returns {string}
 */
function moneyFormatBR (money) {
  return money.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

module.exports = moneyFormatBR
