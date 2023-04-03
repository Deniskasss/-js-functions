// BEGIN
export const takeOldest = (users, num = 1) => {
    return users.sort((user1, user2) => Date.parse(user1.birthday) - Date.parse(user2.birthday)).slice(0, num);
}
export default takeOldest;
// END