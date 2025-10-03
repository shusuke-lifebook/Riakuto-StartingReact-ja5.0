const patty = {
  name: "Patty Rabbit",
  email: "patty@maple.town",
  address: { town: "Mapple Town" },
};

const rolley = { ...patty, name: "Rolley Cocker" };
rolley.email = "rolley@palm.town";
rolley.address.town = "Palam Town";

console.log(patty);
