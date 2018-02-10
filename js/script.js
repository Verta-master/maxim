//Script for internal pages
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
  } else {
    $('.header').removeClass('bg');
  }
  if (window.innerWidth < 1229) {
    $('.footer-main').hide();
  } else {
    if (scrollPos > 150) {
      $('.footer-main').fadeOut();
    } else {
      $('.footer-main').fadeIn();
    }
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
