// faça uma div com uma TAG P e um botão, toda vez que eu clicar no botão o conteúdo de P deve mudar.
// O P primeiro deve ser um contador.
// Começando em 3
// E toda vez que clicar aumenta 2

let counterNumber = document.querySelector(".counter-number");
let numLog = document.querySelector(".num-log");
const btnAdd = document.querySelector("#btn-add");
const btnSub = document.querySelector("#btn-sub");

counterNumber.textContent = 3;


//Botao mais
let num = [3];

btnAdd.addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = num[i] + 2;
  }
  num.push(sum);

  counterNumber.innerHTML = num[num.length - 1];
  numLog.innerHTML += `${num[num.length - 1]}, `;
});

// Botao menos

btnSub.addEventListener("click", () => {
  let sub = 0;
  for (let i = 0; i < num.length; i++) {
    sub = num[i] - 2;
  }
  num.push(sub);

  counterNumber.innerHTML = num[num.length - 1];
  numLog.innerHTML += `${num[num.length - 1]}, `;
});