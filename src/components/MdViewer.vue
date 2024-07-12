<!--定义 MdViewer 组件展示题目内容-->
<script setup lang="ts">
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import { Viewer } from "@bytemd/vue-next";
import { withDefaults, defineProps } from "vue";

/**
 * 定义组件属性类型 供父组件使用
 */
interface Props {
  value: string;
}

const plugins = [gfm(), highlight()];
const props = withDefaults(defineProps<Props>(), {
  value: () => "",
});
</script>

<template>
  <Viewer :value="value" :plugins="plugins" />
</template>

<style scoped></style>
