
var init = () => {
    $(".card").on("click", cardToggleBody)
}

var cardToggleBody = (e) => {
    console.log("QQ")
    ele = e.target;
    $(ele).children(".card__body").slideToggle();
}

$(document).ready(init);