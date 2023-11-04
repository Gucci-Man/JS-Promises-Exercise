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
                console.log(`Second round card value is ${value} and card suit is ${suit}`);
            }
        })
        .catch(err => console.log(err));
})
.catch(err => console.log("Rejected!", err))