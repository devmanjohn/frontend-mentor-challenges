function rotateDice() {
  let dice = document.querySelector('#generate-advice');
  dice.classList.add('rotate-dice');

  setTimeout(() => {
    dice.classList.remove('rotate-dice');
  }, 800);
}

async function generateAdvice() {
  rotateDice();

  // fetch advice and apply
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();

  const { id, advice } = data.slip;
  document.getElementById('index').innerHTML = id;
  document.getElementById('advice').innerHTML = advice;
}
