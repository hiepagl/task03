let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let header = $(".c-header");
let menuMobile = $("#menuMobile");
let introContents = $$(".p-intro__content > dd");
let showInfos = $$(".p-intro__showInfo");

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

for (let i = 0; i < showInfos.length; i++) {
  showInfos[i].onclick = function () {
    introContents[i].classList.toggle("is-show");
  };
}
