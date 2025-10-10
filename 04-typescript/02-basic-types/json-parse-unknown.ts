const str2 = `{"id": 2, "username": "diana"}`;
const user2: unknown = JSON.parse(str2);
console.log(user2.id, user2.address.zipCode);
