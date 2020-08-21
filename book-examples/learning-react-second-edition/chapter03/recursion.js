const recurse = (value, fn, delay = 1000) => {
  fn(value);
  return value > 0
    ? setTimeout(() => recurse(value - 1, fn, delay), delay)
    : value;
};

// recurse(10, (value) => console.log(value));

var count = 0;
function repeat(count) {
  setTimeout(() => {
    console.log(count);
    count = count + 1;
    repeat(count);
  }, 1000);
}
repeat(count);
