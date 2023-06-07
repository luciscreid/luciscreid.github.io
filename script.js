var arrows = document.querySelectorAll('.arrow');

// Itera sobre cada seta
arrows.forEach(function(arrow) {
  // Adiciona um evento de clique à seta
  arrow.addEventListener('click', function() {
    // Obtém a lista de linguagens usadas
    var languages = this.parentElement.querySelector('.languages');

    // Alterna a classe CSS para mostrar ou ocultar a lista
    languages.classList.toggle('show');
  });
  
  // Adiciona um evento de mouseover à seta
  arrow.addEventListener('mouseover', function() {
    // Adiciona uma classe CSS para mostrar a seta
    this.classList.add('active');
  });
  
  // Adiciona um evento de mouseout à seta
  arrow.addEventListener('mouseout', function() {
    // Remove a classe CSS para ocultar a seta
    this.classList.remove('active');
  });
});