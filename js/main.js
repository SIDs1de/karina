$(function() {
    $('.btn-next--first').click(function(){
        $('html, body').animate({scrollTop: $('.second').offset().top}, 300);
		return false;
    })

    $('.btn-next--second').click(function(){
        $('html, body').animate({scrollTop: $('.third').offset().top}, 300);
		return false;
    })

    $('.btn-next--third').click(function(){
        $('html, body').animate({scrollTop: $('.fourth').offset().top}, 300);
		return false;
    })

    $('.btn-back').click(function(){
        $('html, body').animate({scrollTop: $('.main').offset().top}, 300);
		return false;
    })


    $(window).scroll(function() {
	    $('.grid-wrapper-1').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+950) {
	            $(this).addClass("animate__backInLeft");
	        }
	    });
	});

    $(window).scroll(function() {
	    $('.grid-wrapper-2').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+950) {
	            $(this).addClass("animate__backInLeft");
	        }
	    });
	});

    $(window).scroll(function() {
	    $('.grid-wrapper-3').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+950) {
	            $(this).addClass("animate__backInLeft");
	        }
	    });
	});

    $(window).scroll(function() {
	    $('.btn-next').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+950) {
	            $(this).addClass("animate__backInLeft");
	        }
	    });
	});

    $(window).scroll(function() {
	    $('.btn-back').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+950) {
	            $(this).addClass("animate__backInLeft");
	        }
	    });
	});

    $(".image").click(function(){	// Событие клика на маленькое изображение
        var img = $(this);	// Получаем изображение, на которое кликнули
      var src = img.attr('src'); // Достаем из этого изображения путь до картинки
      $("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
                       "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
                       "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
                       "</div>"); 
      $(".popup").fadeIn(400); // Медленно выводим изображение
      $(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
          $(".popup").fadeOut(400);	// Медленно убираем всплывающее окно
          setTimeout(function() {	// Выставляем таймер
            $(".popup").remove(); // Удаляем разметку всплывающего окна
          }, 400);
      });
  });
})