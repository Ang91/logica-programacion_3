function calcularFactorial() {
  // Obtener el número ingresado por el usuario
  const numero = parseInt(document.getElementById("numero").value);

  // Validar que el número sea válido
  if (isNaN(numero) || numero < 0) {
      document.getElementById("resultado").textContent = "Por favor, ingresa un número válido (entero positivo).";
      return;
  }

  // Calcular el factorial
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
      factorial *= i;
  }

  // Mostrar el resultado en el DOM
  document.getElementById("resultado").textContent = `El factorial de ${numero} es: ${factorial}`;
}