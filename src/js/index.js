// 头部右侧导航
let list = document.querySelectorAll('.nav > a');
for(let i = 0; i < list.length; i++){
    list[i].onclick = function () {
        for(let j = 0; j < list.length; j++){
            list[j].children[0].classList.remove("active");
            list[j].children[1].classList.remove("active");
        }
        list[i].children[0].classList.add("active");
        list[i].children[1].classList.add("active");
    };
};

// 金属合约头部滚动一定的距离的固定
// let navBar = document.querySelector(".metal_header nav_bar");
//
// console.log(navBar);
// console.log('111111111111');

