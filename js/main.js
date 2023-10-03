(function($) {

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

})(jQuery);


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
      limitPosition = sliderItemWidth * (sliderItem.length - Math.floor(100 / sliderItemWidth));

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