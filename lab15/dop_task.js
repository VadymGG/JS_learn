function X(a) 
{
  return function(b) 
  {
    return a * b;
  };
}

const double = X(2);
const triple = X(3);

console.log(double(5));
console.log(triple(5));