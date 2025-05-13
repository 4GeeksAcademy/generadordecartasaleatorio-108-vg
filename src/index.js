const newCard = () => {
  console.log('genero una nueva carta')

  let suits = ['♠', '♥', '♦', '♣'];
  let numbers = ['A', '2', '3', '4', '5', '9', '10', 'J','Q','K'];

  let randomSuit = suits[Math.floor(Math.random()* suits.length)];
  let randomNumber = numbers[Math.floor(Math.random()* numbers.length)];

    document.getElementById('top-suit').textContent = randomSuit;
    document.getElementById('card-number').textContent = randomNumber;
    document.getElementById('bottom-suit').textContent = randomSuit;
};

window.onload = function() {
    console.log("");
    newCard();

};
setInterval(newCard, 1000);