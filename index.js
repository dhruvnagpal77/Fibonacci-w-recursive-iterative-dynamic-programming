//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
var calculation1 = 0;
var calculation2 = 0;
var calculation3 = 0;

//Recursive approach, O(2^N) aka exponential because at every step we are doubling up the function calls
function fibonacciRecursion(index) {
  calculation1++;
  if (index < 2) {
    return index;
  }
  return fibonacciRecursion(index-1) + fibonacciRecursion(index-2);
}

//Iterative approach, O(N) linear
//It's also called bottom-up approach in this case, coz we start from simplest solution at the bottom & work our way up higher & higher towards more complex problems.
function fibonacciIterative(index) {
  let arr = [0,1];
  for (let i = 2; i <= index; i++) {
    calculation2++;
    arr.push(arr[i-1] + arr[i-2]);
  }
  return arr[index];
}

//Dynamic programing approach, O(N) linear & the best way to do this problem.
//It's also called top-down approach in this case, coz we work our way from complex problem at top to simpler problem at bottom.
function fibonacciDP() {
  let cache = {};
  //returning a diff fun inside a fun is called closures in JS, used so we don't have to declare cache as global var
  return function fib(index) {
    calculation3++;
    if (index in cache) {
      return cache[index];
    }
    else {
      if (index < 2) {
        return index;
      }
      cache[index] = fib(index-1) + fib(index-2);
      return cache[index];
    }
  }
}

console.log('Recursive result = ' + fibonacciRecursion(6) + ' took ' + calculation1 + ' calculations to get result');
console.log('Iterative result = ' + fibonacciIterative(6) + ' took ' + calculation2 + ' calculations to get result');
const fasterFib = fibonacciDP();
console.log('Dynamic programming result = ' + fasterFib(6) + ' took ' + calculation3 + ' calculations to get result');