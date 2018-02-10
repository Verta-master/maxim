//Script for index(main) page
//Mobile menu
$('.menu__btn').click(function() {
  $(this).next().slideToggle();
  $('body').toggleClass('noscroll');
  $('.menu').toggleClass('menu--closed');
  $('.menu').toggleClass('menu--opened');
  $('.main-bg').toggleClass('blur-nav');
  $('.overlay-nav').toggleClass('overlay-nav--show');
});

$('.menu__item').hover(
  function() {
    var $this = $(this);
    $('.menu__sublist', $this).slideDown();
  },
  function() {
    var $this = $(this);
    $('.menu__sublist', $this).slideUp();
});

$('.overlay-nav').click(function() {
  $('.menu__wrap').slideUp();
  $('body').removeClass('noscroll');
  $('.menu').addClass('menu--closed');
  $('.menu').removeClass('menu--opened');
  $('.main-bg').removeClass('blur-nav');
  $('.overlay-nav').removeClass('overlay-nav--show');
});

$('body').keydown(function(eventObject){
  if (eventObject.which == 27) {
    $('.menu__wrap').slideUp();
    $('body').removeClass('noscroll');
    $('.menu').addClass('menu--closed');
    $('.menu').removeClass('menu--opened');
    $('.main-bg').removeClass('blur-nav');
    $('.overlay-nav').removeClass('overlay-nav--show');
  }
});

//Scroll for animation
$(document).ready(function () {
  $(document).on("scroll", onScroll);
});

function onScroll(event){
  var scrollPos = $(document).scrollTop() + 150;
  var decoHeight = parseInt($('body').css('height'), 10);
  if (scrollPos > 150) {
    $('.header').addClass('bg');
    $('.promo__scroll').hide();
    $('.promo__deco').css('height',  decoHeight / 100 - scrollPos/10, 10);
  } else {
    $('.header').removeClass('bg');
    $('.promo__scroll').show();
  }
  
  
  if (scrollPos > 6.5 * window.innerHeight) {
    $('.main-bg__img--active').removeClass('blur');
  } else if (scrollPos > 1.5 * window.innerHeight) {
    $('.main-bg__img--active').addClass('blur');
  } else if (scrollPos > 0.8 * window.innerHeight) {
    $('.main-bg__img').removeClass('main-bg__img--active');
    $('.main-bg__img--2').addClass('main-bg__img--active');
    $('.main-bg__img--active').removeClass('blur');
  } else {
    $('.main-bg__img').removeClass('main-bg__img--active');
    $('.main-bg__img--1').addClass('main-bg__img--active');
  }
  
  if (window.innerWidth < 1229) {
    $('.footer-main').hide();
  } else if (window.innerWidth < 1680) {
    if (scrollPos > 150) {
      $('.footer-main').fadeOut();
    } else {
      $('.footer-main').fadeIn();
    }
  } else if (scrollPos > decoHeight - scrollPos/5) {
      $('.footer-main').fadeOut();
    } else {
      $('.footer-main').fadeIn();
    }
}

//List and plate-view buttons
var btnPlate = document.querySelector('.title__plate');
var btnList = document.querySelector('.title__list');
var listView = document.querySelector('.timetable__list');
btnPlate.addEventListener("click", function() {
  listView.classList.add('timetable__list--plate');
  btnList.classList.remove('title__btn-active');
  btnPlate.classList.add('title__btn-active');
});
btnList.addEventListener("click", function() {
  listView.classList.remove('timetable__list--plate');
  btnList.classList.add('title__btn-active');
  btnPlate.classList.remove('title__btn-active');
});

//Media-queries
function onWindowChange() {
  if (window.innerWidth < 1022) {
    $('.title__list').hide();
    $('.title__plate').hide();
    $('.timetable__list').addClass('timetable__list--plate');
    $('.main-bg__img--2').addClass('blur-mobile');
  } else {
    $('.title__list').show();
    $('.title__plate').show();
    $('.timetable__list').removeClass('timetable__list--plate');
  }
}

$(window).resize(function(){
	onWindowChange();
});
$(document).ready(function(){
	onWindowChange();
});

//Circles
var circles = $('.value__circle');

circles.appear({ force_process: true });

circles.on('appear', function() {
  var circle = $(this);
  if (!circle.data('inited')) {
    $('#circle1').circleProgress({
      value: 0.13,
      size: 150,
      startAngle: -Math.PI/2,
      reverse: true,
      thickness: 3,
      fill: '#ffffff',
      emptyFill: 'rgba(255, 255, 255, 0.3)',
    }).on('circle-animation-progress', function(event, progress, stepValue) {
      $(this).find('strong').html(Math.round(stepValue * 100) + '<span>%</span>');
    });

    $('#circle2').circleProgress({
      value: 0.47,
      size: 150,
      startAngle: -Math.PI/2,
      reverse: true,
      thickness: 3,
      fill: '#ffffff',
      emptyFill: 'rgba(255, 255, 255, 0.3)',
    }).on('circle-animation-progress', function(event, progress, stepValue) {
      $(this).find('strong').html(Math.round(stepValue * 100) + '<span>%</span>');
    });

    $('#circle3').circleProgress({
      value: 0.71,
      size: 150,
      startAngle: -Math.PI/2,
      reverse: true,
      thickness: 3,
      fill: '#ffffff',
      emptyFill: 'rgba(255, 255, 255, 0.3)',
    }).on('circle-animation-progress', function(event, progress, stepValue) {
      $(this).find('strong').html(Math.round(stepValue * 100) + '<span>%</span>');
    });

    $('#circle4').circleProgress({
      value: 0.07,
      size: 150,
      startAngle: -Math.PI/2,
      reverse: true,
      thickness: 3,
      fill: '#ffffff',
      emptyFill: 'rgba(255, 255, 255, 0.3)',
    }).on('circle-animation-progress', function(event, progress, stepValue) {
      $(this).find('strong').html(Math.round(stepValue * 100) + '<span>%</span>');
    });

    $('#circle5').circleProgress({
      value: 0.38,
      size: 150,
      startAngle: -Math.PI/2,
      reverse: true,
      thickness: 3,
      fill: '#ffffff',
      emptyFill: 'rgba(255, 255, 255, 0.3)',
    }).on('circle-animation-progress', function(event, progress, stepValue) {
      $(this).find('strong').html(Math.round(stepValue * 100) + '<span>%</span>');
    });
    
    circle.data('inited', true);
  }
  setTimeout(function () {
    $(circle.circleProgress('widget')).stop();
  }, 2000);
});
