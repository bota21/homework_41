$(() => {
  $('.burger_menu').on('click', () => {
    $('.menu').addClass('active');
    $('.menu').toggle();
  });
})