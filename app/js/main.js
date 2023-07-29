let select = function () {
  let selectHeader = document.querySelectorAll('.custom-select__top');
  let selectItem = document.querySelectorAll('.custom-select__item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  });
  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest('.custom-select'),
      currentText = select.querySelector('.custom-select__current');
    currentText.innerText = text;
    select.classList.remove('is-active');
  }
};

$(".star").rateYo({
  starWidth: "16px",
  ratedFill: "#69B99D",
  numStars: 5,
  fullStar: true,
  readOnly: true,
  starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' + '<path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967' +
    '1.481-8.279-6.064-5.828 8.332-1.151z"/>' +
    '</svg>'
});

$('.search-section__tabs-link').on('click', function (e) {
  e.preventDefault();
  $('.search-section__tabs-link').removeClass('search-section__tabs-link--active');
  $(this).addClass('search-section__tabs-link--active');

  $('.search-section__item').removeClass('search-section__item--active');
  $($(this).attr('href')).addClass('search-section__item--active');
});

select(); //обеспечивает плавное открытие custom-select фильтра