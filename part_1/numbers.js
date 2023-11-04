const div1 = document.querySelector("#one");

const p = document.createElement("p");

/* newLi.innerText = "Hello!";

ul.append(newLi); */

// 1. Get a fact about your favorite number (90)

let url = "http://numbersapi.com/90?json"
axios.get(url)
.then(res => {
    console.log(res.data.text)

    p.innerText = res.data.text;
    div1.append(p)
})
.catch(err => console.log("REJECTED!", err))

// 2. Get data on multiple numbers in a single request

const ul = document.querySelector("#two");
const oneLi = document.createElement("li");
const twoLi = document.createElement("li");
const threeLi = document.createElement("li");
const fourLi = document.createElement("li");

let numberPromises = []; // to store promises
let responseArr = []; // to store responses

secondLi = document.createElement("li");

for (let i = 1; i < 5; i++) {
    numberPromises.push(
      axios.get(`http://numbersapi.com/${i}?json`)
    );
  }

Promise.all(numberPromises)
    .then(numbersArr => {
        for (res of numbersArr) {
            console.log(res.data.text)
            responseArr.push(res.data.text)
        }

        console.log(`length of array is ${numbersArr.length}`)
        oneLi.innerText = responseArr[0];
        twoLi.innerText = responseArr[1];
        threeLi.innerText = responseArr[2];
        fourLi.innerText = responseArr[3];

        ul.append(oneLi);
        ul.append(twoLi);
        ul.append(threeLi);
        ul.append(fourLi);
  
    })
    .catch(err => console.log("REJECTED!", err))
