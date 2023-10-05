
/*evento dropdown menu*/
/*(function($) {

	"use strict";

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});

})(jQuery);*/


/*evento carrusel*/

var documentElement = document;

documentElement.addEventListener('DOMContentLoaded', function() {

  const sliderMe = () => {
    let currentPosition = 0,
      sliderItem = documentElement.querySelectorAll('.slider-item'),
      sliderItemWidth = window.getComputedStyle(sliderItem[0]).flexBasis.match(/\d+\.?\d+/g),
      sliderInner = documentElement.querySelector('.slider-inner'),
      
      control = {
        next: documentElement.querySelector('#next'),
        slideNext() {			
          currentPosition += parseFloat(sliderItemWidth);
          if (currentPosition > limitPosition) {
            currentPosition = 0;
          }
          sliderInner.style.right = currentPosition + '%';
        },
        prev: documentElement.querySelector('#prev'),
       
		slidePrev() {
          currentPosition -= parseFloat(sliderItemWidth);
          if (currentPosition < 0) {
            currentPosition = limitPosition;
          }
          sliderInner.style.right = currentPosition + '%';
        }
      },
      limitPosition = sliderItemWidth * (sliderItem.length - Math.floor(200 / sliderItemWidth));

    control.next.addEventListener('click', control.slideNext)
    control.prev.addEventListener('click', control.slidePrev)

    window.addEventListener("resize",function(){
      currentPosition = 0;
      documentElement.querySelector('.slider-inner').style.right = currentPosition + '%';
    })
  }
  sliderMe();

  window.addEventListener("resize", sliderMe)

});




//*PARA SELECCIONAR LOS DIV DEL CARROUSEL!*//
var disgraf = document.getElementById("box1");

        // evento de clic al div
        disgraf.addEventListener("click", function() {
            // Redirecciona a una URL cuando se hace clic
            window.location.href = "https://www.google.com/";
        });

var disind = document.getElementById("box2");

        //evento de clic al div
        disind.addEventListener("click", function() {
            // Redirecciona a una URL cuando se hace clic
            window.location.href = "/../index.html"; 
        });


//*PARA SELECCIONAR LOS DIV DE PROYECTOS*//
var pop1 = document.getElementById("popu01");

        // evento de clic al div
        pop1.addEventListener("click", function() {
            // Redirecciona a una URL cuando se hace clic
            window.location.href = "https://www.google.com/";
        });




/*evento carrusel 2!*/
var documentElemento = document;

documentElemento.addEventListener('DOMContentLoaded', function() {

  const sliderMe2 = () => {
    let currentPosition2 = 0,
      sliderItem2 = documentElemento.querySelectorAll('.slider-item2'),
      sliderItemWidth2 = window.getComputedStyle(sliderItem2[0]).flexBasis.match(/\d+\.?\d+/g),
      sliderInner2 = documentElemento.querySelector('.slider-inner2'),
     
      control2 = {
        next2: documentElemento.querySelector('#next2'),
        slideNext2() {
          currentPosition2 += parseFloat(sliderItemWidth2);
          if (currentPosition2 > limitPosition2) {
            currentPosition2 = 0;
          }
          sliderInner2.style.right = currentPosition2 + '%'; 
        },
        prev2: documentElemento.querySelector('#prev2'),
       
		slidePrev2() {
          currentPosition2 -= parseFloat(sliderItemWidth2);
          if (currentPosition2 < 0) {
            currentPosition2 = limitPosition2;
          }
          sliderInner2.style.right = currentPosition2 + '%'; 
        }
      },
      // Reducir el valor aquí para un desplazamiento mayor
      limitPosition2 = sliderItemWidth2 * (sliderItem2.length - Math.floor(400 /sliderItemWidth2));

    control2.next2.addEventListener('click', control2.slideNext2);
    control2.prev2.addEventListener('click', control2.slidePrev2);

    window.addEventListener("resize2", function() {
      currentPosition2 = 0;
      documentElemento.querySelector('.slider-inner2').style.right = currentPosition2 + '%';
    });
  }
  sliderMe2();

  window.addEventListener("resize2", sliderMe2);

});


//*PARA VISIBILIZAR EL SQUARE BLANCO DE EMPLEO*//
/*const box2 = document.querySelector('.box2');
const square10 = document.getElementById('square10');

box2.addEventListener('mouseover', function() {
  square10.style.display = 'block'; // Muestra el square10
});

box2.addEventListener('mouseout', function() {
  square10.style.display = 'none'; // Oculta el square10 cuando se retira el mouse
});*/


/*  MOSTRAR DETALLE DE EMPLEO EN CADA AVISO*/
// Obtén todos los elementos con la clase "box-trigger"
const boxTriggers = document.querySelectorAll('.box-trigger');

// Recorre cada elemento y agrega eventos de mouseover y mouseout de manera dinámica
boxTriggers.forEach((boxTrigger) => {
  const squareId = boxTrigger.id.replace('box', 'square'); // Obtiene el ID del square correspondiente
  const square = document.getElementById(squareId);

  // Agrega evento de mouseover
  boxTrigger.addEventListener('mouseover', function() {
    square.style.visibility = 'visible';
   /* square.style.display = 'block'; // Muestra el square al pasar el mouse*/
  });

  // Agrega evento de mouseout
  boxTrigger.addEventListener('mouseout', function() {
     square.style.visibility = 'hidden'; // Cambia la visibilidad a oculto después de un retraso    
    });
});





