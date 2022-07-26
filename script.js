// faça uma div com uma TAG P e um botão, toda vez que eu clicar no botão o conteúdo de P deve mudar.
// O P primeiro deve ser um contador.
// Começando em 3
// E toda vez que clicar aumenta 2

let counterNumber = document.querySelector(".counter-number");
let numLog = document.querySelector(".num-log");
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
// let num = 3;
// btnAdd.addEventListener("click", () => {
//   num += + 2;
//   counterNumber.textContent = num;
// });

// Acrescentando btn menos (DIMINUINDO EM 1 a cada click)
// let num2 = 3;
// btnSub.addEventListener("click", () => {
//   num += - 1;
//   counterNumber.textContent = num;
// });




// //CRIANDO LOG
// let num = 3;
// btnAdd.addEventListener("click", () => {
//   num += + 2;
//   counterNumber.innerHTML = num;
//   numLog.innerHTML += `${num} , `;
//   console.log(num);
// });

// let array1 = [3,5,9, 11, 13];
// let sumArray = [];
// let num = array1[array1.length - 1];

// console.log(num);

// array1.forEach((element) => {
//   let sum = 0;
//   sum += element + 2;
//   sumArray.push(sum)
// });

// console.log(sumArray)

// let array2 = [3];

// btnAdd.addEventListener("click", () => {
//   let lastNumber = array2[array2.length - 1];

//   let sumNum = 0;
//   sumNum += lastNumber + 2;

//   array2.push(sumNum);

//   counterNumber.innerHTML = array2[array2.length - 1];
//   numLog.innerHTML += `${sumNum} , `;
// });

// REFATORANDO COM .map()
// let array3 = [3];

// btnAdd.addEventListener("click", () => {
//   let arrayAdd = array3.map((num) => num + 2);

//   array3.push(arrayAdd[arrayAdd.length -1]);

//   counterNumber.innerHTML = arrayAdd[arrayAdd.length -1];
//   numLog.innerHTML += `${arrayAdd[arrayAdd.length -1]} , `;
// });


// TESTANDO POSSIBILIDADES
// let num = [3];

// btnAdd.addEventListener("click", () => {
//   num.push(num[num.length - 1] + 2);

// counterNumber.innerHTML = num[num.length - 1];
// numLog.innerHTML += `${num[num.length - 1]} , `;
// });


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
  let numSub = num.pop();
  console.log(numSub)

  if(num <= 0) {
    counterNumber.innerHTML = 0;
    numLog.innerHTML += `${0} , `;
    num = [1];
  } else {
    counterNumber.innerHTML = numSub - 2;
    numLog.innerHTML += `${num[num.length - 1]}, `;
  }
});