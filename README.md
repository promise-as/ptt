## `ptt`官网

- 要兼容到`IE9`
- 在`IE8`上显示正常

### `sass` 和 `less` 继承类的不同

- `sass` 用的是`extand`

  ```js
  %clearfix {
    zoom: 1;
    &:after {
      clear: both;
    }
    &:before,
    &:after {
      content: "";
      display: table;
    }
  }
  
  .container {
      @extend %clearfix;
  }
  ```

- `less` 用的是类似于函数

  ```js
  .clearfix() {
    zoom: 1;
    &:after {
      clear: both;
    }
    &:before,
    &:after {
      content: "";
      display: table;
    }
  }
  
  .container {
  	.clearfix();
  }
  ```

### 问题

- 平台 的 `app` 切换是 图标有问题

