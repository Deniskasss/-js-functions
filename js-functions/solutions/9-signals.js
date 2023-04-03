const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
    'yahoo.com',
];

// BEGIN
export const getFreeDomainsCount = (emails) => {
    return emails.reduce((old_value, el) => {
        let [, domain] = el.split("@");
        if (freeEmailDomains.includes(domain)) {
            if (domain in old_value)
                old_value[domain]++;
            else
                old_value[domain] = 1;
        }
        return old_value;
    }, {});
}
export default getFreeDomainsCount;
// END