let operations = [];

function onButtonClick(event) {
  let buttonText = event.target.innerText;
  let total = document.getElementById('total');
  total.innerHTML = buttonText;
  operations.push(buttonText);

  if (buttonText == "="){
    total.innerHTML = calculate(operations)
  } else if (buttonText == "C") {
    total.innerHTML = "";
    operations = []
  }
}

function calculate(operations){
  first_number = parseInt(operations[0])
  second_number = parseInt(operations[2])
  operator = operations[1]

  if (operator == "+"){
    answer = first_number + second_number
  }else if (operator == "-") {
    answer = first_number - second_number
  }else if (operator == "*"){
    answer = first_number * second_number
  }else if (operator == "/"){
    answer = first_number / second_number
  }
  return answer
}

let actions = document.getElementById('numOps');
actions.addEventListener("click", onButtonClick);
