const carMakers: string[] = [];

carMakers.push('ford');
carMakers.push('toyota');
carMakers.push('chevy');

const cardsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push('200');

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2020-10-10');