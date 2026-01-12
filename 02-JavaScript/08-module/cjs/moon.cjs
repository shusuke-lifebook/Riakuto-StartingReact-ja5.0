const moon = {
  modifier: "prism",
  transform() {
    console.log(`Moon ${this.modifier} power, make up!`);
  },
};

module.exports = moon;

exports.transform = function () {
  console.log("Venus power, make up!");
};

const finish = function () {
  console.log("Crescent beam!");
};

exports.finish = finish;
