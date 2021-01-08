
var init = () => {
    $(".card").on("click", cardToggleBody)
    $(".menu__toggle, .menu__blackout").on("click", menuToggle)
}

var cardToggleBody = (e) => {
    console.log("Card:Toggle")
    ele = e.target;
    $(ele).children(".card__body").slideToggle();
}

var menuOpen = false

var menuToggle = () => {
    console.log("Menu:Toggle");
    $(".menu__blackout").fadeToggle();

    $(".menu__toggle").fadeOut({
        complete: () => {
            $(".menu__toggle").toggleClass("fa-bars fa-times");
            $(".menu__toggle").fadeIn();
        }
    });

    if(menuOpen) { // close menu
        $(".menu__collapse").css({
            left: "-70vw",
            right: "100vw"
        });
    } else { // open menu
        $(".menu__collapse").css({
            left: "0",
            right: "30vw"
        });
    }

    menuOpen = !menuOpen;
}

$(document).ready(init);