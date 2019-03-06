(function () {
    $(".about").hide();
    $(".portfolio").hide();
})();

const renderHome = function () {
    $("section").hide();
    $(".home").show();

    $("h1").empty();
    showText("h1", "Hi, I'm Peter. I'm a full-stack web developer.", 0, 100);
}

const renderAbout = function () {
    $("section").hide();
    $(".about").show();
}

const renderPortfolio = function () {
    $("section").hide();
    $(".portfolio").show();
}

// function to display text letter by letter
const showText = function (target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
}

showText("h1", "Hi, I'm Peter. I'm a full-stack web developer.", 0, 100);

$(".homeLink").on('click', renderHome);
$(".aboutLink").on('click', renderAbout);
$(".portfolioLink").on("click", renderPortfolio);