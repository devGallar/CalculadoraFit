document.addEventListener('DOMContentLoaded', function() {
    const ageInput = document.getElementById('ageInput');
    const weightInput = document.getElementById('weightInput');
    const heightInput = document.getElementById('heightInput');
  
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
  });