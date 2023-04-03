// BEGIN
export const getGirlFriends = (users) => {
    return users.map(user => user.friends.flat()).flat().filter(friend => friend.gender == "female");
}
export default getGirlFriends;
// END