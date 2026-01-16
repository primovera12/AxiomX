(function ($) {
	"use strict";

    jQuery(document).ready(function($){
	
		$(".menu_trigger").click(function() {  //use a class, since your ID gets mangled
			$('.header-wrap').addClass("active");      //add the class to the clicked element
		});
		$(".menu_close").click(function() {  //use a class, since your ID gets mangled
			$('.header-wrap').removeClass("active");      //add the class to the clicked element
		});


		//  Hero Slider Start
		$(".hero-slider").owlCarousel({
			items: 1,
			nav: true,
			dots: false,
			loop: true,
			margin: 15,
			autoplay: false,
			autoplayTimeout: 10000,
			smartSpeed: 1000,
			navText: [
				'<i class="far fa-arrow-left"></i>',
				'<i class="far fa-arrow-right"></i>'
			],
			   animateOut: 'fadeOut', // IMPORTANT
    			animateIn: 'fadeIn',   // IMPORTANT
			 onTranslate: function () {
				$('.hero-inner > *').css({
					opacity: 0,
					transform: 'translateY(20px)'
				});
			},
			onTranslated: function () {
				$('.owl-item.active .hero-inner > *').css({
					opacity: 1,
					transform: 'translateY(0)'
				});
			}
		});
		//  Hero Slider End


		//  Partners Slider Start
		$(".partners-slider").owlCarousel({
			items: 5,
			nav: false,
			dots: false,
			loop: true,
			margin: 35,
			autoplay: true,
			autoplayTimeout: 2000,
			smartSpeed: 1000,
			autoWidth:true,
		});
		//  Partners Slider End

		//  About Slider
		$(".about-slider").owlCarousel({
			items: 1,
			nav: true,
			dots: false,
			loop: true,
			margin: 15,
			autoplay: true,
			autoplayTimeout: 10000,
			smartSpeed: 1000,
			navText: [
				'<i class="far fa-arrow-left"></i>',
				'<i class="far fa-arrow-right"></i>'
			],
			   animateOut: 'fadeOut', // IMPORTANT
    			animateIn: 'fadeIn',   // IMPORTANT
			 onTranslate: function () {
				$('.about-box > *').css({
					opacity: 0,
					transform: 'translateY(20px)'
				});
			},
			onTranslated: function () {
				$('.owl-item.active .about-box > *').css({
					opacity: 1,
					transform: 'translateY(0)'
				});
			}
		});
		// About Slider End


		//  Accordion Action Start
		$(".accordion-item").click(function(event){  
			$(this).toggleClass('active').siblings().removeClass('active'); 
		});  


		//  Video Popup Start
		$(function(){
			$('.video-popup').magnificPopup({ type: 'iframe' });
		});


		// Counter up Start
		document.querySelectorAll('.counter-text').forEach(counter => {
		const target = parseFloat(counter.dataset.target);
		const suffix = counter.nextSibling ? counter.nextSibling.nodeValue : '';
		
		let current = 0;
		const increment = target / 200; // adjust speed

		const update = () => {
			current += increment;
			if (current < target) {
			counter.innerText = Math.floor(current);
			requestAnimationFrame(update);
			} else {
			counter.innerText = target;
			}
		};

		update();
		});
		// Counter up Start



		
	});





}(jQuery));	