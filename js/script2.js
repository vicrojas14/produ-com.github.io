document.addEventListener('DOMContentLoaded', function() {
  const dateInput = document.getElementById('dateInput');
  
  dateInput.addEventListener('click', function() {
    this.setAttribute('type', 'date'); // reactiva el calendario al hacer clic
  });
});