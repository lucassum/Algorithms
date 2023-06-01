/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return accounts.reduce((richestCustomerWealth, currentCustomer) => {
    const currentCustomerWealth = currentCustomer.reduce(
      (sum, val) => sum + val,
      0
    );
    return currentCustomerWealth > richestCustomerWealth
      ? currentCustomerWealth
      : richestCustomerWealth;
  }, 0);
};
