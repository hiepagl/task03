let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
var header = $(".c-header");
var menuMobile = $("#menuMobile");

window.onscroll = function () {
  handleScrollTopHeader();
};

function handleScrollTopHeader() {
  var scrollTopHeader =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  if (scrollTopHeader > 50) {
    header.classList.add("is-active");
  } else {
    header.classList.remove("is-active");
  }
}

menuMobile.onclick = function () {
  menuMobile.classList.toggle("is-active");
};
