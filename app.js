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

const renderHWModal = function () {
    const hwID = $(this).attr("dataHwID");
    console.log(hwID)
    $(".modal-body").html(
        `<div>
            <h4>${bootcampHWs[hwID].name}</h4>
            <p>${bootcampHWs[hwID].description}</p>
            <a href=${bootcampHWs[hwID].deployLink}>Deployed</a>
            <a href=${bootcampHWs[hwID].githubLink}>Github</a>
            <image class="modalImage"src=${bootcampHWs[hwID].imageLink}/>
        </div>`
    )
    $("#modal").modal("show");
}

$('.hwCarousel').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    // freeScroll: true,
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

$("#portfolio").on('click', "#modalTest",renderHWModal);
$(".homeLink").on('click', renderHome);
$(".aboutLink").on('click', renderAbout);
$(".portfolioLink").on("click", renderPortfolio);