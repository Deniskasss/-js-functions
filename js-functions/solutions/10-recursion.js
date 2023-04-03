const sequenceSum = (begin, end) => {
    // BEGIN
    if (begin > end) {
        return NaN;
    }

    function recursion_sum(begin, end) {
        if (begin < end) {
            return begin + recursion_sum(begin + 1, end);
        }
        return begin;
    }

    return recursion_sum(begin, end);
    // END
};

export default sequenceSum;