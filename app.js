(function () {
    $("#about").hide();
    $("#portfolio").hide();
})();

let abort = false;

const renderHome = function () {
    abort = false;
    $("#about").addClass("swing-out-left-bck");
    $("#home").removeClass("fade-out");
    setTimeout(function () {
        $("section").hide();
        $("#home").show();
        $("h1").empty();
        showText("h1", "Hi, I'm Peter. I'm a full-stack web developer.", 0, 100);
    }, 450);
}

const renderAbout = function () {
    $("#home").addClass("fade-out");
    setTimeout(function () {
        $("section").hide();
        $("#about").removeClass("swing-out-left-bck");
        $("#about").show();
        abort = true;
    }, 1000);
}

const renderPortfolio = function () {
    $("section").hide();
    $("#portfolio").show();
    abort = true;
}

// function to display text letter by letter
const showText = function (target, message, index, interval) {
    if (index < message.length && abort === false) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
    else {
        return;
    }
}

$('.hwCarousel').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    freeScroll: true,
    groupCells: 3
});

$('.projectCarousel').flickity({
    cellAlign: 'center',
    contain: true,
    freeScroll: true,
    wrapAround: true
});

$('.timeline').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    freeScroll: true,
    groupCells: 3
});

showText("h1", "Hi, I'm Peter. I'm a full-stack web developer.", 0, 100);

$(".homeLink").on('click', renderHome);
$(".aboutLink").on('click', renderAbout);
$(".portfolioLink").on("click", renderPortfolio);