const ol = document.querySelector("ol");

const newLi = document.createElement("li");

/* newLi.innerText = "Hello!";

ul.append(newLi); */

// 1. Get a fact about your favorite number (90)

let url = "http://numbersapi.com/90?json"
axios.get(url)
.then(res => {
    console.log("First promise resolved")
    console.log(res.data.text)

    newLi.innerText = res.data.text;
    ol.append(newLi)
})
.catch(err => console.log("REJECTED!", err))

// 2. Get data on multiple numbers in a single request