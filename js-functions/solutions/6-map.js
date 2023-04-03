// BEGIN
export const getChildren = (users) => {
    return users.map(user => user.children.flat()).flat();
}
export default getChildren;
// END