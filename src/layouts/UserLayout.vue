<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/logo.svg" class="logo" />
          <div>OJ判题系统</div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://github.com/lpeicheng/oj-frontend" target="_blank">
          OJ判题系统
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<!--!!!!注释不能打在style里面-->
<!--0% 0% / 100% 100%;图片左上角位于容器左上角，宽度高度1:1-->
<!--magin-bottom:底部外边距-->
<!--
  position: sticky;   滚动时固定在底部
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  设置left、right、bottom确保元素在不同设备上的显示效果一致，保证滚动过程中左右下不会移动-->
<style scoped>
#userLayout {
  text-align: center;
  background: url("https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png")
    0% 0% / 100% 100%;
}

#userLayout .logo {
  width: 64px;
  height: 64px;
}

#userLayout .header {
  margin-top: 16px;
}

#userLayout .content {
  margin-bottom: 16px;
  padding: 20px;
}

#userLayout .footer {
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script></script>
