// BEGIN
export const groupBy = (users, group) => {
    return users.reduce((old_value, el) => {
        if (el[group] in old_value)
            old_value[el[group]].push(el);
        else
            old_value[el[group]] = [el];
        return old_value;
    }, {});
}
export default groupBy;
// END