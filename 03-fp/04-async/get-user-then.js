function getUser(userID) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userID}`).then(
    (respone) => {
      if (!respone.ok) {
        throw new Error(`${respone.status} Error`);
      } else {
        return respone.json();
      }
    },
  );
}

console.log("--- Start ---");
getUser(2)
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("--- Complated ---");
  });
