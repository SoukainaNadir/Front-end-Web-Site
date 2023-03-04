
import { scroll, animate } from "https://cdn.skypack.dev/motion@10.13.1"

/* Dark mode */

scroll(
	animate("#progress", { scaleX: [0, 1] })
);

/* nav */
$(document).ready(function () {
    $(".nav-toggler").each(function (_, navToggler) {
    var target = $(navToggler).data("target");
    $(navToggler).on("click", function () {
        $(target).animate({
        height: "toggle",
        });
    });
    });
});

/* Preloader */

