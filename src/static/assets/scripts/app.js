var header = $(".c-header");
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
    header.addClass("is-active");
  } else {
    header.removeClass("is-active");
  }
}
