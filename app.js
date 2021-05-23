const fs = require('fs');

const genders = ['M', 'F'];

const maleNames = ['Mariusz', 'Jan', 'Michał', 'Paweł', 'Damian', 'Robert', 'Arkadiusz', 'Łukasz'];
const femaleNames = ['Katarzyna', 'Magdalena', 'Joanna', 'Aldona', 'Izabela', 'Mariola', 'Alina', 'Anna', 'Małgorzata'];

const lastName = ['Kowalska', 'Nowak', 'Kowalski', 'Firanowicz', 'Michałowski', 'Niedźwiedź', 'Nowicka', 'Brzoskwinia', 'Majewska', 'Niewiadomski', 'Złoty', 'Dostojewski',
'Michalik', 'Niebieska', 'Złota', 'Lewandowski', 'Żurek', 'Lewandowska', 'Ziółko', 'Nowicki'];

const randChoice = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const people = [];

for (let i = 1; i < 20; i++ ) {
  let person = {};

  person.gender = randChoice(genders);

  if (person.gender === 'M' ){
    person.firstName = randChoice(maleNames);
  } else {
    person.firstName = randChoice(femaleNames);
  }

  person.lastName = randChoice(lastName);

  // ??? person.age = Math.floor(Math.random() * );

  people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});