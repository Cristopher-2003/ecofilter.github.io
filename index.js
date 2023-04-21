const autoSlider = () => {
    const slides = document.querySelectorAll('.slide');
    const active = document.querySelector('.active');
    let index = 0;
    const lastIndex = slides.length - 1;
  
    // Buscar el índice de la imagen activa
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains('active')) {
        index = i;
        break;
      }
    }
  
    // Remover la clase "active" de la imagen actual
    active.classList.remove('active');
  
    // Calcular el índice de la siguiente imagen
    if (index === lastIndex) {
      index = 0;
    } else {
      index++;
    }
  
    // Agregar la clase "active" a la siguiente imagen
    slides[index].classList.add('active');
  }
  
  // Iniciar el slider automático
  setInterval(autoSlider, 6000);
  
  // Agregar event listener a los botones manuales
  const manualBtns = document.querySelectorAll('.manual-btn');
  manualBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const slides = document.querySelectorAll('.slide');
      const active = document.querySelector('.active');
      active.classList.remove('active');
      slides[index].classList.add('active');
    });
  });
  