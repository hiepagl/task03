let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let header = $(".c-header");
let menuMobile = $("#menuMobile");
let introContents = $$(".p-intro__content > a");
let showInfos = $$(".p-intro__showInfo");
let pointList1 = $$(".p-point__list1 > .p-point__wrapItem");
let pointList2 = $$(".p-point__list2 > .p-point__wrapItem");
let pointList3 = $$(".p-point__list3 > .p-point__wrapItem");
let navBarList = $$(".c-header__nav > ul > li > a");
let pointList1Btn = $$(
  ".p-point__list1 > .p-point__wrapItem > .p-point__Item > .p-point__btnMore"
);
let pointList2Btn = $$(
  ".p-point__list2 > .p-point__wrapItem > .p-point__Item > .p-point__btnMore"
);
let pointList3Btn = $$(
  ".p-point__list3 > .p-point__wrapItem > .p-point__Item > .p-point__btnMore"
);

window.onscroll = function () {
  handleScrollTopHeader();
};

function handleScrollTopHeader() {
  let scrollTopHeader =
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

let clearPointList1 = function () {
  for (let i = 0; i < pointList1.length; i++) {
    pointList1[i].classList.remove("active");
  }
};
let clearPointList2 = function () {
  for (let i = 0; i < pointList2.length; i++) {
    pointList2[i].classList.remove("active");
  }
};
let clearPointList3 = function () {
  for (let i = 0; i < pointList3.length; i++) {
    pointList3[i].classList.remove("active");
  }
};

for (let i = 0; i < pointList1.length; i++) {
  pointList1Btn[i].onclick = function () {
    clearPointList1();
    pointList1[i].classList.add("active");
  };

  pointList2Btn[i].onclick = function () {
    clearPointList2();
    pointList2[i].classList.add("active");
  };

  pointList3Btn[i].onclick = function () {
    clearPointList3();
    pointList3[i].classList.add("active");
  };
}

for (let i = 0; i < navBarList.length; i++) {
  navBarList[i].onclick = function () {
    menuMobile.classList.remove("is-active");
  };
}
