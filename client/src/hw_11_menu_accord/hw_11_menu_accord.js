import './hw_11_menu_accord.scss';

$(document).ready(function () {
    $(".menu_home li.menu__items_categoria > a").click(function (e)
    {
        $('html, body').animate({scrollTop: $(this).offset().top}, 1000);
        e.preventDefault();
        $(this).toggleClass("active").parent().toggleClass("active");
        $(this).parent().children(".menu__items_content").slideToggle();
    });

    $("ul.menu__items > li.menu__items_categoria").click(function (event) {
        let letActive = $(this).children("a.active").hasClass("menu__items_title");
        if (letActive == true) {
            $(this).children("a.menu__items_title.active").removeClass("menu__items_title").addClass("seta-baixo");
        } else {
            $(this).children("a.seta-baixo").removeClass("seta-baixo").addClass("menu__items_title");
        }
        ;
    });
});