const cards = [
    //HEARTS
    {
        suit: "hearts",
        name: "ace",
        image: '',
        value: 11
    },
    {
        suit: "hearts",
        name: "two",
        image: '',
        value: 2
    },
    {
        suit: "hearts",
        name: "three",
        image: '',
        value: 3
    },
    {
        suit: "hearts",
        name: "four",
        image: '',
        value: 4
    },
    {
        suit: "hearts",
        name: "five",
        image: '',
        value: 5
    },
    {
        suit: "hearts",
        name: "six",
        image: '',
        value: 6
    },
    {
        suit: "hearts",
        name: "seven",
        image: '',
        value: 7
    },
    {
        suit: "hearts",
        name: "eight",
        image: '',
        value: 8
    },
    {
        suit: "hearts",
        name: "nine",
        image: '',
        value: 9
    },
    {
        suit: "hearts",
        name: "ten",
        image: '',
        value: 10
    },
    {
        suit: "hearts",
        name: "jack",
        image: '',
        value: 10
    },
    {
        suit: "hearts",
        name: "queen",
        image: '',
        value: 10
    },
    {
        suit: "hearts",
        name: "king",
        image: '',
        value: 10
    },
    //Diamonds
    {
        suit: "diamonds",
        name: "ace",
        image: '',
        value: 11
    },
    {
        suit: "diamonds",
        name: "two",
        image: '',
        value: 2
    },
    {
        suit: "diamonds",
        name: "three",
        image: '',
        value: 3
    },
    {
        suit: "diamonds",
        name: "four",
        image: '',
        value: 4
    },
    {
        suit: "diamonds",
        name: "five",
        image: '',
        value: 5
    },
    {
        suit: "diamonds",
        name: "six",
        image: '',
        value: 6
    },
    {
        suit: "diamonds",
        name: "seven",
        image: '',
        value: 7
    },
    {
        suit: "diamonds",
        name: "eight",
        image: '',
        value: 8
    },
    {
        suit: "diamonds",
        name: "nine",
        image: '',
        value: 9
    },
    {
        suit: "diamonds",
        name: "ten",
        image: '',
        value: 10
    },
    {
        suit: "diamonds",
        name: "jack",
        image: '',
        value: 10
    },
    {
        suit: "diamonds",
        name: "queen",
        image: '',
        value: 10
    },
    {
        suit: "diamonds",
        name: "king",
        image: '',
        value: 10
    },
    //CLubs
    {
        suit: "clubs",
        name: "ace",
        image: '',
        value: 11
    },
    {
        suit: "clubs",
        name: "two",
        image: '',
        value: 2
    },
    {
        suit: "clubs",
        name: "three",
        image: '',
        value: 3
    },
    {
        suit: "clubs",
        name: "four",
        image: '',
        value: 4
    },
    {
        suit: "clubs",
        name: "five",
        image: '',
        value: 5
    },
    {
        suit: "clubs",
        name: "six",
        image: '',
        value: 6
    },
    {
        suit: "clubs",
        name: "seven",
        image: '',
        value: 7
    },
    {
        suit: "clubs",
        name: "eight",
        image: '',
        value: 8
    },
    {
        suit: "clubs",
        name: "nine",
        image: '',
        value: 9
    },
    {
        suit: "clubs",
        name: "ten",
        image: '',
        value: 10
    },
    {
        suit: "clubs",
        name: "jack",
        image: '',
        value: 10
    },
    {
        suit: "clubs",
        name: "queen",
        image: '',
        value: 10
    },
    {
        suit: "clubs",
        name: "king",
        image: '',
        value: 10
    },
    {
        suit: "spades",
        name: "ace",
        image: '',
        value: 11
    },
    {
        suit: "spades",
        name: "two",
        image: '',
        value: 2
    },
    {
        suit: "spades",
        name: "three",
        image: '',
        value: 3
    },
    {
        suit: "spades",
        name: "four",
        image: '',
        value: 4
    },
    {
        suit: "spades",
        name: "five",
        image: '',
        value: 5
    },
    {
        suit: "spades",
        name: "six",
        image: '',
        value: 6
    },
    {
        suit: "spades",
        name: "seven",
        image: '',
        value: 7
    },
    {
        suit: "spades",
        name: "eight",
        image: '',
        value: 8
    },
    {
        suit: "spades",
        name: "nine",
        image: '',
        value: 9
    },
    {
        suit: "spades",
        name: "ten",
        image: '',
        value: 10
    },
    {
        suit: "spades",
        name: "jack",
        image: '',
        value: 10
    },
    {
        suit: "spades",
        name: "queen",
        image: '',
        value: 10
    },
    {
        suit: "spades",
        name: "king",
        image: '',
        value: 10
    }
];


//Setting up game board for dealer
const gameBoardDealer = [];
let randNum = Math.floor(Math.random() * cards.length)
gameBoardDealer.push(cards[randNum])

//Setting up game board for player
const gameBoardPlayer = [];
randNum = Math.floor(Math.random() * cards.length)
gameBoardPlayer.push(cards[randNum])
dealToPlayer();
dealToDealer();


//Function to dispense cards to player
function dealToDealer() {

    gameBoardDealer.forEach(($each) => {
        randNum = Math.floor(Math.random() * cards.length)

        if (cards[randNum].name !== gameBoardDealer[$each] && cards[randNum].name !== gameBoardPlayer[$each] && cards[randNum].suit !== gameBoardDealer[$each] && cards[randNum].suit !== gameBoardPlayer[$each]) {
            gameBoardDealer.push(cards[randNum])

            console.log(gameBoardDealer)
        }
        else {
            this()
        }
    })
}


//Function to dispense cards to player
function dealToPlayer() {

    gameBoardPlayer.forEach(($each) => {
        randNum = Math.floor(Math.random() * cards.length)

        if (cards[randNum].name !== gameBoardPlayer[$each] && cards[randNum].name !== gameBoardDealer[$each] && cards[randNum].suit !== gameBoardPlayer[$each] && cards[randNum].suit !== gameBoardDealer[$each]) {
            gameBoardPlayer.push(cards[randNum])

            console.log(gameBoardPlayer)
        }
        else {
            this();
        }
    })
}



function start() {
    $('#start').on('click', () => {
        setBoard();
    })
}

function setBoard() {
    $('#start').hide()
}

start()