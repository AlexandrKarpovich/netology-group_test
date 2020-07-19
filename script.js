$(document).ready(function() {
    $('.btn').click(function() {
      if ($(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active');
        $(this).html('Добавить');
      } else {
        $(this).parent().addClass('active');
        $(this).html('Удалить из заявки');
      }

      updateCounter();
    });

    function updateCounter() {
      var count = 0;
      $('.btn').each(function() {
        if ($(this).parent().hasClass('active')) {
          count += 1;
        }
      });

      $('#number').html(count).addClass('active');
    }
  });