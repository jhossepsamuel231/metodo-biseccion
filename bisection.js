// Obtener referencias a los elementos HTML
const functionInput = document.getElementById("functionInput");
const lowerLimit = document.getElementById("lowerLimit");
const upperLimit = document.getElementById("upperLimit");
const calculateButton = document.getElementById("calculateButton");

// Agregar event listeners para los campos de entrada
functionInput.addEventListener("input", validateInputs);
lowerLimit.addEventListener("input", validateInputs);
upperLimit.addEventListener("input", validateInputs);


// Función para validar los campos de entrada
function validateInputs() {
  if (functionInput.value.trim() !== "" && lowerLimit.value.trim() !== "" && upperLimit.value.trim() !== "") {
    calculateButton.removeAttribute("disabled");
  } else {
    calculateButton.setAttribute("disabled", "true");
  }
}

function bisectionMethod() {

  const functionInput = document.getElementById("functionInput").value;
  const lowerLimit = parseFloat(document.getElementById("lowerLimit").value);
  const upperLimit = parseFloat(document.getElementById("upperLimit").value);



  let output = "<h3>Resultados:</h3>";
  output += "<p>Función ingresada: " + functionInput + "</p>";

  let a = lowerLimit;
  let b = upperLimit;
  let i = 1;
  let e = 1;
  let r = 0;

  output += "<table border='1'>";
  output += "<tr><th>Iteración</th><th>a</th><th>b</th><th>Aproximación</th><th>Error</th></tr>";

  while (e >= 3E-6 && i <= 20) {
    let va = r;
    r = (a + b) / 2;
    let fa = math.evaluate(functionInput.replace(/x/g, a));
    let fb = math.evaluate(functionInput.replace(/x/g, b));
    let fr = math.evaluate(functionInput.replace(/x/g, r));
    output += "<tr><td>" + i + "</td><td>" + a + "</td><td>" + b + "</td><td>" + r + "</td>";

    if (fa * fr <= 0) {
      b = r;
      e = Math.abs((r - va) / r);
      output += "<td>" + e.toFixed(6) + "</td></tr>";
    } else {
      a = r;
      e = Math.abs((r - va) / r);
      output += "<td>" + e.toFixed(6) + "</td></tr>";
    }
    i++;
  }
  output += "</table>";

  output += "<p>Raíz encontrada: " + r.toFixed(9) + "</p>";
  document.getElementById("output").innerHTML = output;
}
