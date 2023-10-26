window.onload = (event) => {
    const charhovers = document.getElementsByClassName("char-hover");

    for (const text of charhovers) {
        const chars = text.split('');

        for (const c of chars) {
            document.getElementById("firstchar").innerHTML += '<span class="text-hover">' + c + '</span>'
        }
    }
};

document.body.onmousemove = function(e) {
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

document.onscroll = function(e) {
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