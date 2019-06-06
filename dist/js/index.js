'use strict';

$(function () {
  function tabActive(ele) {
    $(ele).each(function () {
      $(this).mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
      });
    });
  }
  /*首页 nav*/
  tabActive('.nav a');

  /*首页 app*/
  tabActive('.app .app-item');

  /*客户帮助 和 文章详情的 tab*/
  tabActive('.main_tab_body .tab_body_item');
});