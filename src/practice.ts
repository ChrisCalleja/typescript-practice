import { Person } from "./models/Person";

let age: number = 27;
const myName: string = "mitch";
const isCool: boolean = false;

const favFoods: string[] = ["burritos", "black bean burgers", "blueberries"];

const chris: Person = { firstName: "Chris", lastName: "Calleja", age: 35 };

const siblings: Person[] = [
  { firstName: "Tara", lastName: "Cuckovich", age: 24 },
  { firstName: "Tyler", lastName: "Cuckovich", age: 27 },
  chris,
];

const rating = (food: string, score: number): string => {
  return `${food} received a score of ${score}`;
};

const findPersonByName = (
  array: Person[],
  firstName: string
): Person | undefined => {
  return array.find((item) => {
    return item.firstName === firstName;
  });
};
