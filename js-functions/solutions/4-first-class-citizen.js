export const run = (text) => {
    // BEGIN
    function takeLast(msg, last_letters) {
        if (msg.length < last_letters) {
            return null;
        }
        msg = msg.slice(msg.length - last_letters);
        let i;
        let reversed_msg = "";
        for (i = last_letters - 1; i != -1; i--) {
            reversed_msg += msg[i];
        }
        return reversed_msg;
    }
    // END

    return takeLast(text, 4);
};

export default run;