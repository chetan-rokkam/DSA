//Using Maps

const arr = [10, 30, 30, 40, 20, 0, 0, 33, 20, 10, 10 ,30,]
const freqMap = new Map();
for(const val of arr)

{
  freqMap.set(val, (freqMap.get(val) || 0) + 1);
}

freqMap.forEach((count, item) => console.log(`${item}: ${count}`));

//Object

const arr3 = ["banana", "orange", "apple", "orange", "apple", "grapes", "orange" ];
const count = {};

arr3.forEach(item => {
  counts[item] = (counts[item] || 0) + 1;
});
console.log(counts);
console.log(counts);









