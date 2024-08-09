'use strict'
// <    >  =>

window.addEventListener('DOMContentLoaded', () => {

    /* Modal */
    const containerModal = document.getElementById('modal');
    const openButton = document.getElementById('openButton');
    const closetButton = document.getElementById('closetButton');

    openButton.addEventListener('click', () => {
        setTimeout(() => {
            containerModal.style.display = 'block';
            containerModal.classList.add('modal-center');
        }, 200);
    });

    closetButton.addEventListener('click', () => {
        setTimeout(() => {
            containerModal.style.display = 'none';
        }, 200);
    });

    /* Validación - Formulario */
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const input = document.querySelector('.search');
        const mensajeError = document.querySelector('.mensaje-error');
    
        if(input.value.trim() === '') {
            mensajeError.style.display = 'block';
            input.style.borderColor = '#e75656';
        } else {
            mensajeError.style.display = 'none';
            formulario.submit();   
        }
    });
























    // Inicializa ScrollReveal
    const sr = ScrollReveal({
        distance: '50px',
        duration: 1500,
        easing: 'ease-in-out',
        delay: 200,
        reset: false
    });

    // Header
    sr.reveal('.container-header', {
        origin: 'top',
        interval: 300
    });

    sr.reveal('.header img', {
        origin: 'left'
    });

    sr.reveal('.formulario', {
        origin: 'right'
    });

    sr.reveal('.nav ul li', {
        origin: 'bottom',
        interval: 200
    });

    sr.reveal('.description-creative .description', {
        origin: 'left'
    });

    sr.reveal('.image', {
        origin: 'right',
        delay: 500
    });

    /* Contacto */
    sr.reveal('.container-contact', {
        origin: 'bottom',
        interval: 300
    });

    sr.reveal('.card-contact:nth-child(1)', {
        origin: 'left',
        delay: 300
    });

    sr.reveal('.card-contact:nth-child(2)', {
        origin: 'bottom',
        delay: 500
    });

    sr.reveal('.card-contact:nth-child(3)', {
        origin: 'right',
        delay: 700
    });

    sr.reveal('.card-contact .contact .contact-support', {
        distance: '30px',
        duration: 1000,
        delay: 400,
        opacity: 0.5
    });

    ScrollReveal().reveal('.container-contact .card-contact', {
        origin: 'bottom',          
        distance: '20px',          
        duration: 1000,            
        delay: 200,                
        rotate: { x: 0, y: 0, z: 0 }, 
        scale: 1,                  
        easing: 'ease-in-out',     
        interval: 300,             
        reset: false             
    });

    /* Container - Services */
    ScrollReveal().reveal('.container-services', {
        origin: 'bottom',
        distance: '50px',
        duration: 2000,
        delay: 200,
        easing: 'ease-in-out',
        scale: 1,
        interval: 100,
        opacity: 0,
        reset: false
    });

    ScrollReveal().reveal('.card-service', {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 300,
        easing: 'ease-in-out',
        scale: 1,
        opacity: 0,
        interval: 200,
        reset: false
    });

    /* Container - Plan */
    ScrollReveal().reveal('.container-plan', {
        origin: 'left',
        distance: '60px',
        duration: 1200,
        delay: 300,
        easing: 'ease-in-out',
        scale: 1,
        opacity: 0,
        reset: false
    });

    ScrollReveal().reveal('.image-plan', {
        origin: 'left',
        distance: '60px',
        duration: 1000,
        delay: 400,
        easing: 'ease-in-out',
        scale: 1,
        opacity: 0,
        reset: false
    });

    ScrollReveal().reveal('.description-plan', {
        origin: 'right',
        distance: '60px',
        duration: 1000,
        delay: 400,
        easing: 'ease-in-out',
        scale: 1,
        opacity: 0,
        reset: false
    });

    /* Container - Clients  */
    ScrollReveal().reveal('.container-global', {
        origin: 'top',
        distance: '80px',
        duration: 1500,
        delay: 200,
        easing: 'ease-out',
        opacity: 0,
        scale: 1.1,
        reset: false
    });

    ScrollReveal().reveal('.description-global', {
        origin: 'left',
        distance: '60px',
        duration: 1200,
        delay: 400,
        easing: 'ease-out',
        opacity: 0,
        scale: 1.05,
        reset: false
    });

    ScrollReveal().reveal('.global h6', {
        origin: 'left',
        distance: '40px',
        duration: 1000,
        delay: 300,
        easing: 'ease-out',
        opacity: 0,
        scale: 1,
        reset: false
    });

    ScrollReveal().reveal('.global h2', {
        origin: 'left',
        distance: '40px',
        duration: 1200,
        delay: 500,
        easing: 'ease-out',
        opacity: 0,
        scale: 1,
        reset: false
    });

    ScrollReveal().reveal('.global p', {
        origin: 'left',
        distance: '40px',
        duration: 1200,
        delay: 600,
        easing: 'ease-out',
        opacity: 0,
        scale: 1,
        reset: false
    });

    ScrollReveal().reveal('.container-counter', {
        origin: 'bottom',
        distance: '60px',
        duration: 1200,
        delay: 700,
        easing: 'ease-out',
        opacity: 0,
        scale: 1,
        reset: false
    });

    ScrollReveal().reveal('.brands', {
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 800,
        easing: 'ease-out',
        opacity: 0,
        scale: 1,
        reset: false
    });

    ScrollReveal().reveal('.card-brand', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: function (el, i) {
            return 900 + i * 100;
        },
        easing: 'ease-out',
        opacity: 0,
        scale: 1,
        reset: false
    });

    /* Container - analytics  */
    ScrollReveal().reveal('.container-analytics', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        opacity: 0,
        scale: 0.9,
        viewFactor: 0.2,
    });
    
    ScrollReveal().reveal('.images-analytics', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        opacity: 0,
        scale: 0.9,
    });
    
    ScrollReveal().reveal('.description-analytics', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        delay: 400,
        easing: 'ease-in-out',
        opacity: 0,
        scale: 0.9,
    });
    
    ScrollReveal().reveal('.container-check', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 600,
        easing: 'ease-in-out',
        opacity: 0,
        scale: 0.9,
    });
    
    ScrollReveal().reveal('.btn-learn-more', {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 800,
        easing: 'ease-in-out',
        opacity: 0,
        scale: 0.9,
    });

    /* Container - Blogs */
    ScrollReveal().reveal('.container-blog', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        opacity: 0,
        scale: 0.9,
        viewFactor: 0.2,
    });
    
    ScrollReveal().reveal('.description-blog', {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        opacity: 0,
        scale: 0.9,
    });
    
    ScrollReveal().reveal('.container-articles', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 400,
        easing: 'ease-in-out',
        opacity: 0,
        scale: 0.9,
    });
    
    ScrollReveal().reveal('.card-blog', {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 600,
        easing: 'ease-in-out',
        opacity: 0,
        scale: 0.9,
        interval: 200 
    });
    
    ScrollReveal().reveal('.description-card', {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 800,
        easing: 'ease-in-out',
        opacity: 0,
        scale: 0.9,
    });

    /* Container - Email */
    ScrollReveal().reveal('.container-email', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        opacity: 0,
        scale: 0.9,
        viewFactor: 0.2,
    });
    
    ScrollReveal().reveal('.description-email', {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        opacity: 0,
        scale: 0.9,
    });
    
    ScrollReveal().reveal('.container-form', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 400,
        easing: 'ease-in-out',
        opacity: 0,
        scale: 0.9,
    });
    
    ScrollReveal().reveal('.every', {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 600,
        easing: 'ease-in-out',
        opacity: 0,
        scale: 0.9,
    });

    /* Container - Footer */
    if (typeof ScrollReveal === 'function') {
        ScrollReveal().reveal('.description-footer', {
          origin: 'left',
          distance: '50px',
          duration: 1000,
          opacity: 0,
          easing: 'ease-in-out',
          viewFactor: 0.2
        });
      
        ScrollReveal().reveal('.link', {
          origin: 'bottom',
          distance: '30px',
          duration: 1000,
          opacity: 0,
          easing: 'ease-in-out',
          viewFactor: 0.2
        });
      
        ScrollReveal().reveal('.support', {
          origin: 'right',
          distance: '30px',
          duration: 1000,
          opacity: 0,
          easing: 'ease-in-out',
          viewFactor: 0.2
        });
      
        ScrollReveal().reveal('.author', {
          origin: 'bottom',
          distance: '30px',
          duration: 1000,
          opacity: 0,
          easing: 'ease-in-out',
          viewFactor: 0.2
        });
      }
});