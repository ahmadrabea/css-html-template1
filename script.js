 let a = document.querySelector(".sticky-scroll");
// window.onscroll = function () {
//     console.log(this.scrollY);
// };

window.onscroll = function () {


if (this.scrollY >=1000) {
    a.classList.add("show")
}
else {
    a.classList.remove("show")
}
}