// قم بكتابة interface اسمها User
interface User {
  [key: string]: any;
  age: number;
  name: string;
  occupation: string;
}
// :انشئ array باسم persons , ندخل بيانات ثلاث user
let persons: Person[] = [
  {
    age: 23,
    name: 'Khaled',
    occupation: 'Developer',
  },
  {
    age: 30,
    name: 'Mohammed',
    occupation: 'Doctor',
  },
  {
    age: 26,
    name: 'Ahmad',
    occupation: 'Engineer',
  },
];
// انشئ function تقوم بطباعة بيانات مصفوفة persons
function print(arr: User[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].name);
    console.log(arr[i].age);
    console.log(arr[i].occupation);
  }
}
// انشئ interface جديدة باسم Admin , تتكون من
interface Admin {
  [key: string]: any;
  age: number;
  name: string;
  specialty: string;
}

// أدخل بيانات ثلاث Admin على مصفوفة persons . بستخدام Aliases انشاء type يجمع بين user , admin
type Person = User | Admin;

let admins = [
  {
    age: 35,
    name: 'Ali',
    specialty: 'Front-end',
  },
  {
    age: 29,
    name: 'Waleed',
    specialty: 'Back-end',
  },
  {
    age: 40,
    name: 'Faisal',
    specialty: 'Full-stack',
  },
];

for (let i = 0; i < admins.length; i++) {
  persons.push(admins[i]);
}
// اطبع بيانات مصفوفة persons مع التميز بين user , admin
function printPersons(arr: Person[]): void {
  for (let i = 0; i < arr.length; i++) {
    if ('occupation' in arr[i]) {
      console.log(
        `User : ${arr[i].name} , ${arr[i].age} , ${arr[i].occupation}`
      );
    } else {
      console.log(
        `Admin : ${arr[i].name} , ${arr[i].age} , ${arr[i].specialty}`
      );
    }
  }
}

printPersons(persons);
//  انشى function تغير قمية age
function changeAge(index: number, age: number) {
  for (let i = 0; i < persons.length; i++) {
    if (i === index) {
      persons[index].age = age;
      console.log(`${persons[index].name} age is now ${persons[index].age}`);
    }
  }
}

changeAge(4, 31);
