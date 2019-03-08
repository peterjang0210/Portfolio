(function () {
    $("#about").hide();
    $("#portfolio").hide();
})();

let abort = false;

const renderHome = function () {
    abort = false;
    $("#about").addClass("swing-out-left-bck");
    $("#portfolio").addClass("scale-out-center");
    $("#home").removeClass("fade-out");
    $("#home").removeClass("slide-out-top");
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
    $("#home").addClass("slide-out-top");
    setTimeout(function () {
        $("section").hide();
        $("#portfolio").removeClass("scale-out-center");
        $("#portfolio").show();
        $(".carousel-cell-imageHW").hover(changeImageEnterHW, changeImageExitHW);
        $(".carousel-cell-imageProj").hover(changeImageEnterProj, changeImageExitProj);
        abort = true;
    }, 1000);
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
    const hwID = parseInt($(this).attr("dataHwID"));
    console.log(hwID - 1);
    $(".modal-title").html(`${bootcampHWs[hwID - 1].name}`)
    $(".modal-body").html(
        `<div>
            <p>${bootcampHWs[hwID - 1].description}</p>
            <a href=${bootcampHWs[hwID - 1].deployLink}>Deployed</a>
            <a href=${bootcampHWs[hwID - 1].githubLink}>Github</a>
        </div>`
    );
    $("#modal").modal("show");
}

const renderProjectModal = function () {
    const projectID = $(this).attr("dataProjectID");
    $(".modal-title").html(`${bootcampProjects[projectID - 1].name}`)
    $(".modal-body").html(
        `<div>
            <p>${bootcampProjects[projectID - 1].description}</p>
            <a href=${bootcampProjects[projectID - 1].deployLink}>Deployed</a>
            <a href=${bootcampProjects[projectID - 1].githubLink}>Github</a>
        </div>`
    );
    $("#modal").modal("show");
}

const changeImageExitHW = function () {
    const hwID = $(this).attr("dataHwID");
    $(`.hwImage${$(this).attr("dataHwID")}`).removeClass("fade-in-fwd");
    if(hwID == 1){
        $(`.hwImage${hwID}`).attr("src", "./images/stack-letters-letter-handwriting-family-letters-51191.jpeg");
    }
    else if(hwID == 2){
        $(`.hwImage${hwID}`).attr("src", "./images/pexels-photo-357514.jpeg");
    }
    else if(hwID == 3){
        $(`.hwImage${hwID}`).attr("src", "./images/pexels-photo-220076.jpeg");
    }
    else if(hwID == 4){
        $(`.hwImage${hwID}`).attr("src", "./images/pexels-photo-69760.jpeg");
    }
    else if(hwID == 5){
        $(`.hwImage${hwID}`).attr("src", "./images/pexels-photo-270238.png");
    }
    else if(hwID == 6){
        $(`.hwImage${hwID}`).attr("src", "./images/pexels-photo-907607.png");
    }
    else if(hwID == 7){
        $(`.hwImage${hwID}`).attr("src", "./images/smilies-bank-sit-rest-160739.jpeg");
    }
}

const changeImageEnterHW = function (){
    $(`.hwImage${$(this).attr("dataHwID")}`).attr("src", `./images/bootcamphw${$(this).attr("dataHwID")}.png`);
    $(`.hwImage${$(this).attr("dataHwID")}`).addClass("fade-in-fwd");
}

const changeImageExitProj = function () {
    const projID = $(this).attr("dataProjectID");
    $(`.projImage${projID}`).removeClass("fade-in-fwd");
    if(projID == 1){
        $(`.projImage${projID}`).attr("src", "./images/pexels-photo-1021876.jpeg");
    }
    else if(projID == 2){
        $(`.projImage${projID}`).attr("src", "./images/workInProgress.jpeg");
    }
    else if(projID == 3){
        $(`.projImage${projID}`).attr("src", "./images/workInProgress.jpeg");
    }
}

const changeImageEnterProj = function (){
    $(`.projImage${$(this).attr("dataProjectID")}`).attr("src", `./images/bootcampproject${$(this).attr("dataProjectID")}.png`);
    $(`.projImage${$(this).attr("dataProjectID")}`).addClass("fade-in-fwd");
}

$('.hwCarousel').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    freeScroll: true
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

$("#portfolio").on('click', ".carousel-cell-imageHW", renderHWModal);
$("#portfolio").on('click', ".carousel-cell-imageProj", renderProjectModal);
$(".homeLink").on('click', renderHome);
$(".aboutLink").on('click', renderAbout);
$(".portfolioLink").on("click", renderPortfolio);