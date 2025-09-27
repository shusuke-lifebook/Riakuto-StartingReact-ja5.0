function Bird(name) {
  const className = "鳥類";
  this.name = name;

  this.cry = function (sound) {
    console.log(`${this.name}が「${this.sound}」と鳴きました。`);
  };

  this.introduce = function () {
    console.log(`私は${className}の${this.name}です。`);
  };
  return this;
}

Bird.explain = function () {
  console.log(`これは鳥のクラスです。`);
};

function FlyableBird(name) {
  Bird.call(this, name);
  this.fly = function () {
    console.log(`${this.name}が飛びました。`);
  };
  return this;
}

Object.setPrototypeOf(FlyableBird.prototype, Bird.prototype);
