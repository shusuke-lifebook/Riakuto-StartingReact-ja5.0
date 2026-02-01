const rejectList = [];

function promiseN(n) {
  return new Promise((resolove, reject) => {
    console.log(`--- promiseN(${n}) start ---`);
    setTimeout(() => {
      if (rejectList.includes(n)) {
        rejectList(new Error(`*** promise(${n}) rejected ***`));
      } else {
        resolove(n);
        console.log(`=== promise(${n}) resolved ===`);
      }
    }, 1000 * n);
  });
}

const promises = [promiseN(3), promiseN(2), promiseN(1)];
let results = [];

try {
  results = await Promise.all(promises);
} catch (error) {
  console.log("Error: " + error.message);
}

console.log(results);
