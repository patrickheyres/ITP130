
const arrayList = [30, 15, 12, 21, 19 ];

const less18 = a => a.filter(e => +e === e && e < 18);

console.log(less18(arrayList));