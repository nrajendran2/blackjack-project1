
//The 52 card deck as an object array
const cards = [
    //HEARTS
    {
        suit: "hearts",
        name: "ace",
        image: 'images/AH.png',
        value: 11
    },
    {
        suit: "hearts",
        name: "two",
        image: 'images/2H.png',
        value: 2
    },
    {
        suit: "hearts",
        name: "three",
        image: 'images/3H.png',
        value: 3
    },
    {
        suit: "hearts",
        name: "four",
        image: 'images/4H.png',
        value: 4
    },
    {
        suit: "hearts",
        name: "five",
        image: 'images/5H.png',
        value: 5
    },
    {
        suit: "hearts",
        name: "six",
        image: 'images/6H.png',
        value: 6
    },
    {
        suit: "hearts",
        name: "seven",
        image: 'images/7H.png',
        value: 7
    },
    {
        suit: "hearts",
        name: "eight",
        image: 'images/8H.png',
        value: 8
    },
    {
        suit: "hearts",
        name: "nine",
        image: 'images/9H.png',
        value: 9
    },
    {
        suit: "hearts",
        name: "ten",
        image: 'images/10H.png',
        value: 10
    },
    {
        suit: "hearts",
        name: "jack",
        image: 'images/JH.png',
        value: 10
    },
    {
        suit: "hearts",
        name: "queen",
        image: 'images/QH.png',
        value: 10
    },
    {
        suit: "hearts",
        name: "king",
        image: 'images/KH.png',
        value: 10
    },
    //Diamonds
    {
        suit: "diamonds",
        name: "ace",
        image: 'images/ace_D.png',
        value: 11
    },
    {
        suit: "diamonds",
        name: "two",
        image: 'images/2D.png',
        value: 2
    },
    {
        suit: "diamonds",
        name: "three",
        image: 'images/3D.png',
        value: 3
    },
    {
        suit: "diamonds",
        name: "four",
        image: 'images/4D.png',
        value: 4
    },
    {
        suit: "diamonds",
        name: "five",
        image: 'images/5D.png',
        value: 5
    },
    {
        suit: "diamonds",
        name: "six",
        image: 'images/6D.png',
        value: 6
    },
    {
        suit: "diamonds",
        name: "seven",
        image: 'images/7D.png',
        value: 7
    },
    {
        suit: "diamonds",
        name: "eight",
        image: 'images/8D.png',
        value: 8
    },
    {
        suit: "diamonds",
        name: "nine",
        image: 'images/9D.png',
        value: 9
    },
    {
        suit: "diamonds",
        name: "ten",
        image: 'images/10D.png',
        value: 10
    },
    {
        suit: "diamonds",
        name: "jack",
        image: 'images/JD.png',
        value: 10
    },
    {
        suit: "diamonds",
        name: "queen",
        image: 'images/QD.png',
        value: 10
    },
    {
        suit: "diamonds",
        name: "king",
        image: 'images/KD.png',
        value: 10
    },
    //Clubs
    {
        suit: "clubs",
        name: "ace",
        image: 'images/AC.png',
        value: 11
    },
    {
        suit: "clubs",
        name: "two",
        image: 'images/2C.png',
        value: 2
    },
    {
        suit: "clubs",
        name: "three",
        image: 'images/3C.png',
        value: 3
    },
    {
        suit: "clubs",
        name: "four",
        image: 'images/4C.png',
        value: 4
    },
    {
        suit: "clubs",
        name: "five",
        image: 'images/5C.png',
        value: 5
    },
    {
        suit: "clubs",
        name: "six",
        image: 'images/6C.png',
        value: 6
    },
    {
        suit: "clubs",
        name: "seven",
        image: 'images/7C.png',
        value: 7
    },
    {
        suit: "clubs",
        name: "eight",
        image: 'images/8C.png',
        value: 8
    },
    {
        suit: "clubs",
        name: "nine",
        image: 'images/9C.png',
        value: 9
    },
    {
        suit: "clubs",
        name: "ten",
        image: 'images/10C.png',
        value: 10
    },
    {
        suit: "clubs",
        name: "jack",
        image: 'images/JC.png',
        value: 10
    },
    {
        suit: "clubs",
        name: "queen",
        image: 'images/QC.png',
        value: 10
    },
    {
        suit: "clubs",
        name: "king",
        image: 'images/KC.png',
        value: 10
    },
    //Spades
    {
        suit: "spades",
        name: "ace",
        image: 'images/AS.png',
        value: 11
    },
    {
        suit: "spades",
        name: "two",
        image: 'images/2S.png',
        value: 2
    },
    {
        suit: "spades",
        name: "three",
        image: 'images/3S.png',
        value: 3
    },
    {
        suit: "spades",
        name: "four",
        image: 'images/4S.png',
        value: 4
    },
    {
        suit: "spades",
        name: "five",
        image: 'images/5S.png',
        value: 5
    },
    {
        suit: "spades",
        name: "six",
        image: 'images/6S.png',
        value: 6
    },
    {
        suit: "spades",
        name: "seven",
        image: 'images/7S.png',
        value: 7
    },
    {
        suit: "spades",
        name: "eight",
        image: 'images/8S.png',
        value: 8
    },
    {
        suit: "spades",
        name: "nine",
        image: 'images/9S.png',
        value: 9
    },
    {
        suit: "spades",
        name: "ten",
        image: 'images/10S.png',
        value: 10
    },
    {
        suit: "spades",
        name: "jack",
        image: 'images/JS.png',
        value: 10
    },
    {
        suit: "spades",
        name: "queen",
        image: 'images/QS.png',
        value: 10
    },
    {
        suit: "spades",
        name: "king",
        image: 'images/KS.png',
        value: 10
    }
];

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

//LOGIC FOR GAME START

let gameBoardDealer = [];
let randNum = 0;
let gameBoardPlayer = [];
let dealStand = false;
let playerStand = false;




//Function to dispense cards 
function deal(arr) {

    for (i = 0; i < arr.length; i++) {
        randNum = Math.floor(Math.random() * cards.length)
        if (cards[randNum].image !== arr[i].image && cards[randNum].image !== gameBoardDealer[i].image && cards[randNum].image !== gameBoardPlayer[i].image) {
            arr.push(cards[randNum])
            //
            sumCards(gameBoardPlayer);
            console.log(arr)
            break;
        }
        else if (cards[randNum].image === arr[i].image || cards[randNum].image === gameBoardDealer[i].image || cards[randNum].image === gameBoardPlayer[i].image) {
            i -= 1;
        }

    }
    scoreUpdate()
}


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//LOGIC FOR GAMEPLAY
//function to determine winner if both stand

function replay() {

    $('#hitButton').css('visibility', 'hidden')
    $('#standButton').css('visibility', 'hidden')
    $('#menu').append($('<button id="replay">Replay?</button>'))
    $('#replay').on('click', () => {
        location.reload()
        // $('body').css('background-image', 'url(http://moziru.com/images/wild-west-clipart-western-background-16.jpg)')
        // $('body').css('background-position', 'center')
        // $('h1').css('font-size', '100px')

        // $('#replay').remove()
        // $('img').remove()
        // $('#startButton').show()
        // gameBoardPlayer = [];
        // gameBoardDealer = [];
        // randNum = 0;
        // dealStand = false;
        // playerStand = false;
        // console.log("NEW GMAE")
        // console.log("n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n/n")

    })
}

function standWin() {
    if (playerStand === true && dealStand === true && sumCards(gameBoardDealer) > sumCards(gameBoardPlayer)) {
        // alert("The dealer has won")
        $("#messages").text("The Dealer Has Won").fadeIn(3000);
        flip()
        replay()
    }
    else if (playerStand === true && dealStand === true && sumCards(gameBoardPlayer) > sumCards(gameBoardDealer) || sumCards(gameBoardDealer) > 21) {
        // alert("You have defeated the dealer!")
        $("#messages").text("You Have Defeated The Dealer").fadeIn(3000);
        flip()
        replay()
    }
    else if (playerStand === true && dealStand === true && sumCards(gameBoardPlayer) === sumCards(gameBoardDealer)) {
        // alert("The game is a tie")
        $("#messages").text("Tie").fadeIn(3000);
        flip()
        replay()
    }
}


//The dealer's turn 
function dealerTurn() {
    sumCards(gameBoardDealer)
    if (sumCards(gameBoardDealer) <= 14) {
        deal(gameBoardDealer)
        // alert('The dealer hits')
        $("#messages").text("The Dealer Hits").fadeIn(3000);
        $("#messages").fadeOut(3000);

        $('#dealer').prepend($('<img />'))
        $('img').first().attr('src', gameBoardDealer[gameBoardDealer.length - 1].image)
        console.log(gameBoardDealer)

    }
    else if (sumCards(gameBoardDealer) > 14) {
        dealStand = true;
        // alert('The dealer stands')
        $("#messages").text("The Dealer Stands").fadeIn(3000);
        $("#messages").fadeOut(3000);

        standWin()

    }
}

//Function to sum game cards for losing conditions 
function sumCards(arr) {
    let num = 0;
    for (i = 0; i < arr.length; i++) {
        num += arr[i].value
    }
    return num
}

//Function for hit button 

function hit(arr) {
    document.getElementById('hitButton').addEventListener('click', () => {
        deal(arr)
        setPlayerCard()
        if (sumCards(gameBoardPlayer) > 21) {
            // alert("You have gone bust!")
            for(i = 0; i < gameBoardPlayer.length; i++){
                if(gameBoardPlayer[i].name === 'ace' ){
                    gameBoardPlayer[i].value === 1;
                }
                break;
            }
            $("#messages").text("You Have Gone Bust").fadeIn(3000);

            flip()
            replay()

        }
        else if (sumCards(gameBoardPlayer) <= 21) {
            playerStand = false;
            dealerTurn()
        }
    })
}

document.getElementById('hitButton').addEventListener('click', hit(gameBoardPlayer))

//Function for stand button
function stand() {
    document.getElementById('standButton').addEventListener('click', () => {
        playerStand = true
        dealerTurn()

    })
}

document.getElementById('standButton').addEventListener('click', stand())


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//USER INTERACTIVITY
//Function that sets board and starts game
function start() {
    $('#startButton').on('click', () => {
        $('#startButton').hide()
        $('body').css('background-image', 'url(https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4661956.jpg)')
        $('body').css('background-position', 'center top')
        $('h1').css('font-size', '30px')
        $('h1').attr('id', 'header')

        $('#gameButtons').prepend('<p>Player Count: </p>')
        $('p').first().attr('id', 'score')
        $('#hitButton').css('visibility', 'visible')
        $('#standButton').css('visibility', 'visible')
        randNum = Math.floor(Math.random() * cards.length)
        gameBoardDealer.push(cards[randNum])

        randNum = Math.floor(Math.random() * cards.length)
        if (cards[randNum] !== gameBoardDealer[0]) {
            gameBoardPlayer.push(cards[randNum])
        }

        deal(gameBoardPlayer);
        deal(gameBoardDealer);


        for (i = 0; i < gameBoardPlayer.length; i++) {
            $('#player').append($('<img />'))
            $('img').eq(i).attr('src', gameBoardPlayer[i].image)
        }
        for (i = 0; i < gameBoardDealer.length; i++) {
            $('#dealer').append($('<img />'))
            if (i === 0) {
                $('img').eq(i).attr('src', 'images/blue_back.png')
                $('img').eq(i).attr('id','back')

            }
            else {
                $('img').eq(i).attr('src', gameBoardDealer[i].image)
            }
        }
        $("#messages").text("DEFEAT THE DEALER").fadeIn(3000);
        $("#messages").fadeOut(3000);
        scoreUpdate()
    })
}

//Updates score
function scoreUpdate(){
    $('#score').text(`Player count: ${sumCards(gameBoardPlayer)}`)
}


//Function that adds card to player board
function setPlayerCard() {
    $('#player').append($('<img />'))
    $('img').last().attr('src', gameBoardPlayer[gameBoardPlayer.length - 1].image)

}

function flip(){
    $('#back').attr('src', gameBoardDealer[0].image)
}


start()






