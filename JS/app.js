let niños = 0;
let adolescentes = 0;
let  adultos = 0;

while (true) {
  let edad = parseInt(prompt("Ingresa una edad (o escribe 'salir' para terminar):"));
  if (edad === 'salir') break;

  if (edad !== edad || edad <= 0) {
    alert("Por favor, ingresa una edad válida.");
    continue;
  }
  if (edad <= 12) {
    niños++;
  }else if (edad <= 19) {
    adolescentes++;
  }else {
    adultos++;
}
}
console.log(`Niños: ${niños}, Adolescentes: ${adolescentes}, Adultos: ${adultos}`);
