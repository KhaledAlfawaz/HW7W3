"use strict";
// :انشئ array باسم persons , ندخل بيانات ثلاث user
let persons = [
    {
        age: 23,
        name: 'Khaled',
        occupation: 'developer',
    },
    {
        age: 30,
        name: 'Mohammed',
        occupation: 'doctor',
    },
    {
        age: 26,
        name: 'Ahmad',
        occupation: 'engineer',
    },
];
// انشئ function تقوم بطباعة بيانات مصفوفة persons
function print(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].name);
        console.log(arr[i].age);
        console.log(arr[i].occupation);
    }
}
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
function printPersons(arr) {
    for (let i = 0; i < arr.length; i++) {
        if ('occupation' in arr[i]) {
            console.log(`User : ${arr[i].name} , ${arr[i].age} , ${arr[i].occupation}`);
        }
        else {
            console.log(`Admin : ${arr[i].name} , ${arr[i].age} , ${arr[i].specialty}`);
        }
    }
}
printPersons(persons);
function changeAge(index, age) {
    for (let i = 0; i < persons.length; i++) {
        if (i === index) {
            persons[index].age = age;
            console.log(`${persons[index].name} age is now ${persons[index].age}`);
        }
    }
}
changeAge(4, 31);
