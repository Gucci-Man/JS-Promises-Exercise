// 1. Make a request to the API to request a single card from a newly shuffled deck. 
// console.log the value and the suit

let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
axios.get(url)
.then(res => {

    let deck_id = res.data.deck_id;
    return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
})
.then(res => {
    let value = res.data.cards[0].value;
    let suit = res.data.cards[0].suit;
    console.log(`Card value is ${value} and card suit is ${suit}`);
})
.catch(err => console.log("Rejected!", err))

/******************************************************************************************************  
 
2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. 
    Once you have the card, make a request to the same API to get one more card from the **same** deck.
    
    Once you have both cards, ***console.log*** the values and suits of both cards.

*******************************************************************************************************/
let = cardsArr = []; // will hold the two card promises
axios.get(url)
.then(res => {
    //console.log(res.data);

    let deck_id = res.data.deck_id;

    for (let i=0; i<2; i++) {
        cardsArr.push(
            axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
            );
    }

    Promise.all(cardsArr)
        .then(chosenArr => {
            for (res of chosenArr) {
                let value = res.data.cards[0].value;
                let suit = res.data.cards[0].suit;
                //console.log(res.data.cards[0])
                console.log(`Second round card value is ${value} and card suit is ${suit}`);
            }
        })
        .catch(err => console.log(err));
})
.catch(err => console.log("Rejected!", err))

// 3. 

const button = document.querySelector("button");
const board = document.querySelector("#board")
const body = document.querySelector("body");
let deckid = null;

axios.get(url)
.then(res => {
    deckid = res.data.deck_id;
    //console.log(`Deck id is ${deckid}`);
})
.catch(err => console.log("Rejected!", err))

button.addEventListener('click', () => {
    console.log("Clicked!");
    //console.log(`deckid is ${deckid}`);
    axios.get(`https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=1`)
    .then( res => {
        //console.log(res.data)
        console.log(`Cards remaining: ${res.data.remaining}`)
        let cardSrc = res.data.cards[0].image;
        let angle = Math.random() * 90 -45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;

        const newImg = document.createElement("img");
        newImg.setAttribute("src", cardSrc);
        board.append(newImg);

        if (res.data.remaining === 0) {
            console.log("OUT OF CARDS!")
             body.removeChild(button);
        }
    })
    .catch( err => console.log("Rejected!", err)
    );
});