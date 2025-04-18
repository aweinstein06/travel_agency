// Select all destination boxes
const destinationBoxes = document.querySelectorAll('.destination-box');

destinationBoxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'scale(1.03)';
    box.style.transition = 'transform 0.2s ease';
  });

  box.addEventListener('mouseleave', () => {
    box.style.transform = 'scale(1)';
  });
});
