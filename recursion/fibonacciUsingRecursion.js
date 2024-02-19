function fib(n) {
    if (n < 1)
        return n;

    const result = fib(n - 1) + fib(n - 2);
    return result;
}

for (let i = 20; i >= 0; i--) {
    const fibonacciNumber = fib(i);
    console.log(Math.abs(fibonacciNumber));
}
