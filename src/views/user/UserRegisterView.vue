<script setup lang="ts">
import { useStore } from "vuex";
import { UserControllerService, UserRegisterRequest } from "../../../generated";
import { useRouter } from "vue-router";
import { reactive } from "vue";
import message from "@arco-design/web-vue/es/message";

/**
 * 表单信息
 */
const form = reactive({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
} as UserRegisterRequest);

const router = useRouter();
const store = useStore();

/**
 * 提交表单
 * @param data
 */
const handleSubmit = async () => {
  const res = await UserControllerService.userRegisterUsingPost(form);
  // 注册成功，跳转到登录页
  if (res.code === 0) {
    router.push({
      path: "/user/login",
      replace: true,
    });
    message.success("注册成功，请登录");
  } else {
    message.error("注册失败，" + res.message);
  }
};
const forward = () => {
  router.push("/user/login");
};
</script>

<template>
  <div id="userRegisterView">
    <h2 style="margin-bottom: 16px">用户注册</h2>
    <a-form
      style="max-width: 480px; margin: 0 auto"
      label-align="left"
      auto-label-width
      :model="form"
      @submit="handleSubmit"
    >
      <a-form-item field="userAccount" label="账号">
        <a-input v-model="form.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item field="userPassword" tooltip="密码不少于 8 位" label="密码">
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码"
        />
      </a-form-item>
      <a-form-item
        field="checkPassword"
        label="确认密码"
        tooltip="再次输入密码"
      >
        <a-input v-model="form.checkPassword" placeholder="确认密码" />
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          style="width: 480px"
          @click="forward"
        >
          注册
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style scoped></style>
