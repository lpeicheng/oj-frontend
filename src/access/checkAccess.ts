import ACCESS_ENUM from "./accessEnum";

const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  //获取当前登录用户的权限
  const role = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  //如果不需要权限
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  //需要用户权限
  if (needAccess === ACCESS_ENUM.USER) {
    if (role === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }

  if (needAccess === ACCESS_ENUM.ADMIN) {
    if (role !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};
export default checkAccess;
