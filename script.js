// missão 2: faça uma div com uma TAG P e um botão, toda vez que eu clicar no botão o conteúdo de P deve mudar.
// O P primeiro deve ser um contador.
// Começando em 3
// E toda vez que clicar aumenta 2

let counterNumber = document.querySelector(".counter-number");
const btnAdd = document.querySelector("#btn-add");
const btnSub = document.querySelector("#btn-sub");

counterNumber.textContent = 3;

// Primeira solução
// btnAdd.addEventListener("click", addNumber);

// let num = 3;
// function addNumber () {
//   num += + 2;
//   counterNumber.textContent = num;
// }


// Transformando em Arrow Function
let num = 3;
btnAdd.addEventListener("click", () => {
  num += + 2;
  counterNumber.textContent = num;
});

// Acrescentando btn menos (DIMINUINDO EM 1 a cada click)
let num2 = 3;
btnSub.addEventListener("click", () => {
  num += - 1;
  counterNumber.textContent = num;
});


