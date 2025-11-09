// Ejemplo: Mostrar alerta promocionando reciclaje al pulsar cualquier card
document.querySelectorAll('.card').forEach(function(card) {
  card.addEventListener('click', function() {
    alert('¡Súmate a la acción por el medio ambiente! Juntos marcamos la diferencia.');
  });
});
