'use strict';

$(function () {
  function tabActive(ele) {
    $(ele).each(function () {
      var that = this;
      $(that).mouseenter(function () {
        $(that).addClass('active').siblings().removeClass('active');
      });
    });
  }
  /*头部右侧导航*/
  tabActive('.nav a');
  /*客户帮助 和 文章详情的 tab*/
  tabActive('.main_tab_body .tab_body_item');
  /*平台 app*/
  tabActive('.app .app-item');
});