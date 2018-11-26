'use strict';

// 头部右侧导航
var navList = document.querySelectorAll('.nav > a');

// 客户帮助 和 文章详情的 tab
var helpList = document.querySelectorAll('.main_tab_body > .tab_body_item');

function active(activeList) {
    var _loop = function _loop(i, len) {
        activeList[i].onclick = function () {
            for (var j = 0; j < len; j++) {
                activeList[j].classList.remove("active");
            }
            activeList[i].classList.add("active");
        };
    };

    for (var i = 0, len = activeList.length; i < len; i++) {
        _loop(i, len);
    }
}

// 导航
active(navList);
// 客户帮助 和 文章详情
active(helpList);