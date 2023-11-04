// 1. Make a request to the API to request a single card from a newly shuffled deck. 
// console.log the value and the suit

let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
axios.get(url)
.then(res => {
    console.log(res.data);

    let deck_id = res.data.deck_id;
    return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
})
.then(res => {
    let value = res.data.cards[0].value;
    let suit = res.data.cards[0].suit;
    console.log(`Card value is ${value} and card suit is ${suit}`);
})
.catch(err => console.log("Rejected!", err))