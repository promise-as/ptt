// 头部右侧导航
let navList = document.querySelectorAll('.nav > a');

// 客户帮助 和 文章详情的 tab
let helpList = document.querySelectorAll('.main_tab_body > .tab_body_item');

function active(activeList) {
    for (let i = 0, len = activeList.length; i < len; i++) {
        activeList[i].onclick = function () {
            for (let j = 0; j < len; j++) {
                activeList[j].classList.remove("active");
            }
            activeList[i].classList.add("active");
        };
    }
}

// 导航
active(navList);
// 客户帮助 和 文章详情
active(helpList);


