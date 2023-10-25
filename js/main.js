window.onload = (event) => {
    const charhovers = document.getElementsByClassName("char-hover");

    for (const text of charhovers) {
        const chars = text.split('');

        for (const c of chars) {
            document.getElementById("firstchar").innerHTML += '<span class="text-hover">' + c + '</span>'
        }
    }
};

document.body.onmousemove = function (e) {
    document.getElementById("circularcursor").style.setProperty(
        'left', (
            e.clientX + window.scrollX
        ) +
    'px'
    );
    document.getElementById("circularcursor").style.setProperty(
        'top', (
            e.clientY + window.scrollY
        ) +
    'px'
    );
}

document.onscroll = function (e) {
    document.getElementById("horizontal-text-scroll-primary").style.setProperty(
        'left',
        window.innerWidth / window.scrollY * 400 +
        '%'
    );

    document.getElementById("horizontal-text-scroll-secondary").style.setProperty(
        'right',
        window.innerWidth / window.scrollY * 400 +
        '%'
    );

    document.getElementById("horizontal-text-scroll-third").style.setProperty(
        'left',
        window.innerWidth / window.scrollY * 400 +
        '%'
    );

    /*
    if (ElementInViewport(document.getElementById("how-it-works"))) {
        var left = document.getElementById("spotlight-left").style.display = "block";;
        var right = document.getElementById("spotlight-right").style.display = "block";;
    } else {
        document.getElementById("spotlight-left").style.display = "none";
        document.getElementById("spotlight-right").style.display = "none";
    }*/
}

function ElementInViewport(el) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

function openDialog() {
    document.getElementById("dialog").show();
    document.body.style.setProperty("overflow", "hidden")
    document.body.style.setProperty("height", "90%")
}

function closeDialog() {
    document.getElementById("dialog").close();
    document.body.style.removeProperty("overflow")
    document.body.style.removeProperty("height")
}


document.getElementById("how-it-works-button").addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("how-it-works").scrollIntoView({behavior: 'smooth'});
});