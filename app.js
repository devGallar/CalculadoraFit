document.addEventListener('DOMContentLoaded', function() {
    const ageInput = document.getElementById('ageInput');
    const weightInput = document.getElementById('weightInput');
    const heightInput = document.getElementById('heightInput');
    const manInput = document.getElementById('man');
    const womanInput = document.getElementById('woman');
    const buttons = document.querySelectorAll('.activity input[type="button"]');

    function cambiarColorGenero(event) {
      manInput.classList.remove('selected');
      womanInput.classList.remove('selected');
      event.target.classList.add('selected');
    }
    manInput.addEventListener('click', cambiarColorGenero);
    womanInput.addEventListener('click', cambiarColorGenero);



  
    ageInput.addEventListener('keydown', function(event) {
      const key = event.key.toLowerCase();
  
      if (key === 'e') {
        event.preventDefault();
      }
      if (key === '-') {
        event.preventDefault();
      }
    });
  
    weightInput.addEventListener('keydown', function(event) {
      const key = event.key.toLowerCase();
  
      if (key === 'e') {
        event.preventDefault();
      }
      if (key === '-') {
        event.preventDefault();
      }
    });
  
    heightInput.addEventListener('keydown', function(event) {
      const key = event.key.toLowerCase();
  
      if (key === 'e') {
        event.preventDefault();
      }
      if (key === '-') {
        event.preventDefault();
      }
    });

    

    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        buttons.forEach(function(btn) {
          btn.classList.remove('selected');
        });
        this.classList.add('selected');
      });
    });
  });
  const form = document.getElementById('Formulario');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const selectedGenderButton = document.querySelector('.gender-options input[type="button"].selected');
    const gender = selectedGenderButton ? selectedGenderButton.value : '';
    const age = document.getElementById('ageInput').value;
    const weight = document.getElementById('weightInput').value;
    const height = document.getElementById('heightInput').value;
    const selectedActivityButton = document.querySelector('.activity input[type="button"].selected');
    const activity = selectedActivityButton ? selectedActivityButton.value : '';
    console.log('Género:', gender);
      console.log('Edad:', age);
      console.log('Peso:', weight);
      console.log('Altura:', height);
      console.log('Actividad:', activity);
    console.log(calcularCalorias(gender,age,weight,height,activity))
    form.reset();
  });

  function calcularCalorias(gender,age,weight,height,activity){
    let bmr;
    if(gender == 'Hombre'){
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    }else{
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    let totalCalorias;
  switch (activity) {
    case 'No muy activo':
      totalCalorias = bmr * 1.2;
      break;
    case 'Medianamente activo':
      totalCalorias = bmr * 1.55;
      break;
    case 'Activo':
      totalCalorias = bmr * 1.75;
      break;
    case 'Muy activo':
      totalCalorias = bmr * 2.05;
      break;
    default:
      return 'Nivel de actividad no válido';
  }

  return totalCalorias;
  }