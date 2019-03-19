"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
/** 1 use filter to show at least 3 languages **/
const threeLangs = users.filter(user => user.languages.length >=3);
// console.log(threeLangs);

/** 2 use map to get user email **/
const userEmail = users.map(user => user.email);
// console.log(userEmail);
/** 3 use **/
const expYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);
// console.log(`Total years of Experience: ${expYears}`);
/** 4 **/
const avgExpYears = expYears / users.length;
// console.log(`Average years of Experience: ${avgExpYears}`);
/** 5 **/
const lngstEmail = userEmail.reduce((total, user) => {
    return total.length > user.length ? total : user
});
// console.log(lngstEmail);
/** 6 **/
const indivUser = users.reduce((previous, current) => `${previous} ${current.name}`, 'The instructors are:');
// console.log(indivUser);

const langList = users.reduce((previous, current) => {
    current.languages.forEach(lang => {
        if(previous.indexOf(lang) === -1){
            previous.push(lang);
        }
    });
    return previous
}, []);

console.log(langList);