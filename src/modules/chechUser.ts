export function checkUser(user, usersArr) {
  if (usersArr.length < 20) {
    usersArr.push(user); 
  } else {
    if (user.score > usersArr[usersArr.length - 1].score) {
      usersArr.pop();
      usersArr.push(user);      
    };
  }
  usersArr.sort((a, b) => b.score - a.score);
  return usersArr;
};