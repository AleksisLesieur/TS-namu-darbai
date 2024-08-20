// 1
function sum(a: number, b: number): number {
  return a + b;
}

// 2
interface Person {
  name: string;
  age: number;
}

function greet(obj: Person): string {
  return 'hello' + obj.name;
}

// 3
const numArr: Array<number> = [];

function getFirstElement(arr: Array<number>): number {
  return arr[0];
}

enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
}

function getColorName(arg: Color): string {
  return Color[arg];
}

console.log(getColorName(Color.Blue));
