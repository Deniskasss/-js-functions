const smallestDivisor = (num) => {
    // BEGIN
    let i;
    if (num == 1) {
        return 1;
    }
    for (i = 2; i != num + 1; i++) {
        if (num % i == 0)
            return i;
    }
    // END
};
export default smallestDivisor;