function doIt() {
  try {
    const isSucceeded = Math.random() < 0.5;
    if (isSucceeded) {
      console.log("Fulfilled");
    } else {
      throw 1234;
    }
    return "Returned";
  } catch (e) {
    console.error(e, ":", typeof e);
  } finally {
    console.log("Complated");
  }
}

const result = doIt() ?? "";
console.log(result);
