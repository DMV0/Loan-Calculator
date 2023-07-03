
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 50000,
    years: 15,
    rate: 4.5
  }
  expect(calculateMonthlyPayment(values)).toEqual('382.50');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 50066,
    years: 15,
    rate: 4.5
  }
  expect(calculateMonthlyPayment(values)).toEqual('383.00');
});

/// etc
