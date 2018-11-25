"use strict";

// 头部右侧导航
var list = document.querySelectorAll('.nav > a');

var _loop = function _loop(i) {
    list[i].onclick = function () {
        for (var j = 0; j < list.length; j++) {
            list[j].children[0].classList.remove("active");
            list[j].children[1].classList.remove("active");
        }
        list[i].children[0].classList.add("active");
        list[i].children[1].classList.add("active");
    };
};

for (var i = 0; i < list.length; i++) {
    _loop(i);
};

// 金属合约头部滚动一定的距离的固定
// let navBar = document.querySelector(".metal_header nav_bar");
//
// console.log(navBar);
// console.log('111111111111');