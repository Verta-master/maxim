//Mobile menu
$('.menu__btn').click(function() {
  $(this).next().slideToggle();
  $('.menu').toggleClass('menu--closed');
  $('.menu').toggleClass('menu--opened');
  $('.main-bg').toggleClass('blur');
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
  $('.menu__list').slideUp();
  $('.menu').toggleClass('menu--closed');
  $('.menu').toggleClass('menu--opened');
  $('.main-bg').toggleClass('blur');
  $('.overlay-nav').toggleClass('overlay-nav--show');
});

$('body').keydown(function(eventObject){
  if (eventObject.which == 27) {
    $('.menu__list').slideUp();
    $('.menu').toggleClass('menu--closed');
    $('.menu').toggleClass('menu--opened');
    $('.main-bg').toggleClass('blur');
    $('.overlay-nav').toggleClass('overlay-nav--show');
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
    $('.footer-main__scroll').hide();
    $('.footer-main__deco').css('height',  decoHeight / 100 - scrollPos/10, 10);
  } else {
    $('.header').removeClass('bg');
    $('.footer-main__scroll').show();
  }
  if (scrollPos > decoHeight - scrollPos/5) {
    $('.footer-main').fadeOut();
  } else {
    $('.footer-main').fadeIn();
  }
  if (scrollPos > 1.2 * window.innerHeight) {
    $('.main-bg__img').removeClass('main-bg__img--active');
    $('.main-bg__img--2').addClass('main-bg__img--active');
    $('.main-bg__img--active').addClass('blur');
  } else {
    $('.main-bg__img').removeClass('main-bg__img--active');
    $('.main-bg__img--1').addClass('main-bg__img--active');
    $('.main-bg__img--active').removeClass('blur');
  }
  if (scrollPos > 3 * window.innerHeight) {
    $('.main-bg__img').removeClass('main-bg__img--active');
    $('.main-bg__img--3').addClass('main-bg__img--active');
    $('.main-bg__img--active').addClass('blur');
  }
  if (scrollPos > 6 * window.innerHeight) {
    $('.main-bg__img').removeClass('main-bg__img--active');
    $('.main-bg__img--4').addClass('main-bg__img--active');
    $('.main-bg__img--active').removeClass('blur');
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
    $('.footer-main').hide();
    $('.timetable__list').addClass('timetable__list--plate');
  } else {
    $('.title__list').show();
    $('.title__plate').show();
    $('.footer-main').show();
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
});
