//KATA 01
function add(a, b) {
  return a + b;
}

//KATA 02
function multiply(a, b) {
  let ans = 0;
  let count = 0;
  while (count < b) {
    ans = add(a, ans);
    count = add(count, 1);
  }
  return ans;
}

//KATA 03
function power(x, n) {
  let ans = 1;
  let count = 0;
  while (count < n) {
    ans = multiply(x, ans);
    count = add(count, 1);
  }
  return ans;
}

//KATA 04
function factorial(a) {
  let ans = 1;
  let count = 1;
  while (count <= a) {
    ans = multiply(ans, count);
    count = add(count, 1);
  }
  return ans;
}

//KATA 05
function Fibonacci(n) {
  let F1 = 0;
  let F2 = 1;
  let count = 2;
  let ans;
  if (n === 1 || n === 0) {
    return F1;
  }
  if (n === 2) {
    return F2;
  }
  if (n > 2) {
    while (count < n) {
      ans = add(F1, F2);
      F1 = F2;
      F2 = ans;
      count = add(count, 1);
    }
    return ans;
  }
}

// let a = add(2, 2);
// console.log(a);

// let m = multiply(5, 5);
// console.log(m);

// let p = power(3, 4);
// console.log(p);

// let f = factorial(4);
// console.log(f);

// let F = Fibonacci(10);
// console.log(F);
