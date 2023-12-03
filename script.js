// navMobile
document.addEventListener("DOMContentLoaded", function () {
    const liElements = document.querySelectorAll("#navMobile li");

    liElements.forEach(function (li, index) {
        setTimeout(function () {
            li.classList.add("show");
        }, index * 500); // ms
    });
});