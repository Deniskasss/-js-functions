// BEGIN
export const sayPrimeOrNot = (num) => {
    if (isPrime(num))
        console.log("yes");
    else
        console.log("no");
}

export default sayPrimeOrNot;

function isPrime(num) {
    let i;
    if (num <= 0 | num == 1) {
        return false;
    }
    for (i = 2; i <= num - 1; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}
// END