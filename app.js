document.addEventListener("DOMContentLoaded", function () {
  const ageInput = document.getElementById("ageInput");
  const weightInput = document.getElementById("weightInput");
  const heightInput = document.getElementById("heightInput");
  const manInput = document.getElementById("man");
  const womanInput = document.getElementById("woman");
  const buttons = document.querySelectorAll('.activity input[type="button"]');


  function generoValid(){
    const mensajeError = document.getElementById("error-genero")
    if(manInput.classList.contains("selected") || womanInput.classList.contains("selected") ){
      mensajeError.style.display = 'none'
      return true
    }else {
      mensajeError.style.display = 'block'
      return false
      
    }
  }
  function actividadValid(){
    const mensajeError = document.getElementById("error-activity")

    let algunoSeleccionado = false;

    buttons.forEach(button => {
      if (button.classList.contains('selected')) {
        algunoSeleccionado = true;
      }
    });

    if (algunoSeleccionado) {
      mensajeError.style.display = 'none'
      return true
    } else {
      mensajeError.style.display = 'block'
      return false
    }
  }

  function cambiarColorGenero(event) {
    manInput.classList.remove("selected");
    womanInput.classList.remove("selected");
    event.target.classList.add("selected");
  }
  manInput.addEventListener("click", cambiarColorGenero);
  womanInput.addEventListener("click", cambiarColorGenero);

  ageInput.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();

    if (key === "e") {
      event.preventDefault();
    }
    if (key === "-") {
      event.preventDefault();
    }
  });

  weightInput.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();

    if (key === "e") {
      event.preventDefault();
    }
    if (key === "-") {
      event.preventDefault();
    }
  });

  heightInput.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();

    if (key === "e") {
      event.preventDefault();
    }
    if (key === "-") {
      event.preventDefault();
    }
  });

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (btn) {
        btn.classList.remove("selected");
      });
      this.classList.add("selected");
    });
  });

  const form = document.getElementById("Formulario");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const selectedGenderButton = document.querySelector('.gender-options input[type="button"].selected');
  const gender = selectedGenderButton ? selectedGenderButton.value : "";
  const age = document.getElementById("ageInput").value;
  const weight = document.getElementById("weightInput").value;
  const height = document.getElementById("heightInput").value;
  const selectedActivityButton = document.querySelector('.activity input[type="button"].selected');
  const activity = selectedActivityButton ? selectedActivityButton.value : "";
  if(generoValid() && actividadValid()){
    mostrarresultados(calcularCalorias(gender, age, weight, height, activity));
  }
  
  
});



function calcularCalorias(gender, age, weight, height, activity) {
  let bmr;
  if (gender == "Hombre") {
    bmr = Math.round(10 * weight + 6.25 * height - 5 * age + 5);
  } else {
    bmr = Math.round(10 * weight + 6.25 * height - 5 * age - 161);
  }
  let totalCalorias;
  switch (activity) {
    case "No muy activo":
      totalCalorias = Math.round(bmr * 1.2);
      break;
    case "Medianamente activo":
      totalCalorias = Math.round(bmr * 1.55);
      break;
    case "Activo":
      totalCalorias = Math.round(bmr * 1.75);
      break;
    case "Muy activo":
      totalCalorias = Math.round(bmr * 2.05);
      break;
    default:
      return "Nivel de actividad no válido";
  }

  const loseWeigth = Math.round(totalCalorias - 500);
  const gainWeigth = Math.round(totalCalorias - 500);

  const result = [bmr, totalCalorias, gainWeigth, loseWeigth];

  return result;
}

function mostrarresultados(result) {
  document.querySelector(
    ".result span:nth-of-type(1)"
  ).textContent = `Metabolismo basal: ${result[0]} kcal`;
  document.querySelector(
    ".result span:nth-of-type(2)"
  ).textContent = `Calorias de mantenimiento: ${result[1]} kcal`;
  document.querySelector(
    ".result span:nth-of-type(3)"
  ).textContent = `Calorias para subir de peso: ${result[2]} kcal`;
  document.querySelector(
    ".result span:nth-of-type(4)"
  ).textContent = `Calorias para bajar de peso: ${result[3]} kcal`;
}

});



