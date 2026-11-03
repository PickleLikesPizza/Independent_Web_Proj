function imgfade() {
    const img = document.getElementById("img");
    img.classList.add("visible");
}

function anim2() {
    const anim2text = document.getElementById("anim2-text");
    anim2text.textContent = "using js, we can make things rainbow and animated!";
    const button = document.getElementById("rainbowbutton");
    button.classList.toggle("anim2");
}