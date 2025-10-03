const patty = {
  name: "Patty Rabbit",
  email: "patty@maple.town",
  address: { town: "Mapple Town" },
};

const rolley = structuredClone(patty);
rolley.name = "Rolley Cocker";
rolley.email = "rolley@palm.town";
rolley.address.town = "Palm Town";

console.log(patty);
