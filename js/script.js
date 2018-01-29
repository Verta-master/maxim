//Mobile menu
$('.menu__btn').click(function() {
  $(this).next().slideToggle();
  $('.menu').toggleClass('menu--closed');
  $('.menu').toggleClass('menu--opened');
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
