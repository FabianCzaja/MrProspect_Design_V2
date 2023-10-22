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