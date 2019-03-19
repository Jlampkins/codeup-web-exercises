
// import keys from "./keys.js"

// const keys = require("./keys.js");
const url = "https://api.github.com/users/jlampkins";
// console.log(keys);

function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // if (Math.random() > 0.1) {
                resolve('Here is your data: ...');
            // } else {
            //     reject('Network Connection Error!');
            // }
        }, num);
    })
}
wait(2000).then(() => console.log("Promise resolved, idiot!"));

// fetch('https://api.github.com/users/users/' + username +"/events/public", {headers: {'Authorization': 'token ' + GITHUB_TOKEN}})
//     .then(data => {
//         return data.json();
//     })
//     .then((jsonData) => {
//     console.log(jsonData);
// });

//FETCH IS A PROMISE!!!
function userName(username) {
    // return new Promise((resolve, reject) => {
    //     resolve("good job, dumbass");
    //     reject("no good");
        return fetch('https://api.github.com/users/' + username + "/events/public", {headers: {'Authorization': 'token ' + GITHUB_TOKEN}})
            .then(data => { //data is the information you are fetching for.
                return data.json(); //.json() will return a js object that we can interact with.

            })
            .then((data) => { //now we can reach the data as an object
                console.log(data);
                return data.filter((event) =>{
                    return event.type === "PushEvent";
                })
            })
        .then((data) => {
            console.log(data);
            return (data[0].created_at);
        })
    // })
}


userName("jlampkins")
    .then((data) => console.log(data));




