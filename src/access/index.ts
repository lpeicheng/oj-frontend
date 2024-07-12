import router from "../router";
import store from "../store";
import ACCESS_ENUM from "./accessEnum";
import checkAccess from "./checkAccess";

router.beforeEach(async (to, from, next) => {
  console.log("用户信息", store.state.user.loginUser);
  let loginUser = store.state.user.loginUser;
  //如果没登录就自动登录
  if (!loginUser || !loginUser.userRole) {
    // 加 await 是为了等用户登录成功之后，再执行后续的代码
    await store.dispatch("user/getLoginUser");
    loginUser = store.state.user.loginUser;
  }
  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  //页面需要用户登录
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    //没登录就跳转到登录页面
    if (
      !loginUser ||
      !loginUser.userRole ||
      loginUser.userRole === ACCESS_ENUM.NOT_LOGIN
    ) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    //已经登录但是权限不足
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }
  next();
});
