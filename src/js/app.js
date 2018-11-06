const ARR = [];

for(i=0;i<=20;i++) {
    ARR.push(i);
}

const ARR_TOTAL = ARR.reduce((prev, curr) => prev + curr, 0);

console.log(ARR_TOTAL);