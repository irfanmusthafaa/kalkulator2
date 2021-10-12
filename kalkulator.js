function isNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && !isNaN(parseFloat(str)) // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
  ); // ...and ensure strings of whitespace fail
}

function calculate(el) {
  var check1 = document.getElementById("cek1").checked;
  var check2 = document.getElementById("cek2").checked;
  var check3 = document.getElementById("cek3").checked;
  var arrayOfChecks = [check1, check2, check3];

  var inp1 = document.getElementById("angka1").value;
  var inp2 = document.getElementById("angka2").value;
  var inp3 = document.getElementById("angka3").value;
  var arrayOfInputs = [inp1, inp2, inp3];

  var operator = el.value;

  var countTrue = 0;
  for (let i = 0; i < arrayOfChecks.length; i++) {
    if (arrayOfChecks[i] == true && isNumeric(arrayOfInputs[i])) {
      countTrue += 1;
    }
  }

  if (countTrue < 2) {
    document.getElementById("hasilInput").value =
      "Error";
    return;
  } else {
    document.getElementById("hasilInput").value = "";
  }

  var resultCalculate = 0;
  switch (operator) {
    case "+":
      var counterTrue = 0;
      for (let i = 0; i < arrayOfInputs.length; i++) {
        if (arrayOfChecks[i] == true && isNumeric(arrayOfInputs[i])) {
          if (counterTrue == 0) {
            resultCalculate = parseFloat(arrayOfInputs[i]);
          } else {
            resultCalculate += parseFloat(arrayOfInputs[i]);
          }
          counterTrue += 1;
        }
      }
      document.getElementById("hasilInput").value = resultCalculate;

      break;
    case "-":
      var counterTrue = 0;
      for (let i = 0; i < arrayOfInputs.length; i++) {
        if (arrayOfChecks[i] == true && isNumeric(arrayOfInputs[i])) {
          if (counterTrue == 0) {
            resultCalculate = parseFloat(arrayOfInputs[i]);
          } else {
            resultCalculate -= parseFloat(arrayOfInputs[i]);
          }
          counterTrue += 1;
        }
      }
      document.getElementById("hasilInput").value = resultCalculate;

      break;
    case "*":
      var counterTrue = 0;
      for (let i = 0; i < arrayOfInputs.length; i++) {
        if (arrayOfChecks[i] == true && isNumeric(arrayOfInputs[i])) {
          if (counterTrue == 0) {
            resultCalculate = parseFloat(arrayOfInputs[i]);
          } else {
            resultCalculate *= parseFloat(arrayOfInputs[i]);
          }
          counterTrue += 1;
        }
      }
      document.getElementById("hasilInput").value = resultCalculate;

      break;
    case "/":
      var counterTrue = 0;
      for (let i = 0; i < arrayOfInputs.length; i++) {
        if (arrayOfChecks[i] == true && isNumeric(arrayOfInputs[i])) {
          if (counterTrue == 0) {
            resultCalculate = parseFloat(arrayOfInputs[i]);
          } else {
            resultCalculate /= parseFloat(arrayOfInputs[i]);
          }
          counterTrue += 1;
        }
      }
      document.getElementById("hasilInput").value = resultCalculate;

      break;
    default:
      console.log("not defined");
      break;
    // code block
  }
}