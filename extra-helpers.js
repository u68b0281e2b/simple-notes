// quick notes in code

const uniq = (xs) => [...new Set(xs)];

function debounce(fn, ms) {
  let t;
  return (...a) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...a), ms);
  };
}

console.log(typeof sleep);
