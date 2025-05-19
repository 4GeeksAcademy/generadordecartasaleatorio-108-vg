const newCard = () => {
  let suits = ['♠', '♥', '♦', '♣'];
  let numbers = ['A', '2', '3', '4', '5', '9', '10', 'J','Q','K'];

  let randomSuit = suits[Math.floor(Math.random()* suits.length)];
  let randomNumber = numbers[Math.floor(Math.random()* numbers.length)];

  const card = document.querySelector('.card');
  card.style.width = '100px';
  card.style.height = '150px';

  const topSuit = document.getElementById('top-suit');
  const bottomSuit = document.getElementById('bottom-suit');
  const cardNumber = document.getElementById('card-number');

  topSuit.textContent = randomSuit;
  cardNumber.textContent = randomNumber;
  bottomSuit.textContent = randomSuit;

  
  cardNumber.style.display = 'flex';
  cardNumber.style.justifyContent = 'center';
  cardNumber.style.alignItems = 'center';
  cardNumber.style.height = '100%';
  cardNumber.style.width = '100%';
  cardNumber.style.textAlign = 'center';

  if (randomSuit === '♥' || randomSuit === '♦') {
    topSuit.style.color = 'red';
    bottomSuit.style.color = 'red';
  } else {
    topSuit.style.color = '';
    bottomSuit.style.color = '';
  }
};
setInterval(newCard, 1000);