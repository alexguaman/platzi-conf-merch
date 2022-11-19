const handleSumTotal = (cart) => {
  const reducer = (accum, current) => accum + current.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
};

export default handleSumTotal;
