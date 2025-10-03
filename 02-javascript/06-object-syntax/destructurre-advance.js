const response = {
  data: [
    {
      id: 1,
      name: "Patty Rabbit",
      email: "patty@mapple.town",
    },
    {
      id: 2,
      name: "Rolley Cocker",
      email: "rolley@palm.town",
    },
    {
      id: 3,
      name: "Bobby Kumanov",
      email: "bobby@mapple.town",
    },
  ],
};

const { data: users = [] } = response;
console.log(users);
