//obj
const obj = { a: 1, b: 2 };
// const { a, b } = obj;
const { a, b } = { a: 1, b: 2 };
const { a: a1, b: b1 } = obj;
console.log(a, b);
console.log(a1, b1);

//arr
const x = [1, 2, 3];
const [y, z] = x;
console.log(y, z);
const { m, ...n } = { m: 1, b: 2, c: 3 };
console.log(m, n);
