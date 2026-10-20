// bits and pieces

function debounce(fn, ms) {
  let t;
  return (...a) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...a), ms);
  };
}

const sum = (xs) => xs.reduce((a, b) => a + b, 0);

console.log(sum([1, 2, 3]));
