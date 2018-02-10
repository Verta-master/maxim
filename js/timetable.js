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
