<!--引入Monaco Editor组件（代码编辑器）-->
<script setup lang="ts">
import { onMounted, ref, toRaw, withDefaults, defineProps, watch } from "vue";
import * as monaco from "monaco-editor";

interface Props {
  value: string;
  language: string;
  handleChange: (v: string) => void;
}
/**
 * 给组件指定初始值
 */
const props = withDefaults(defineProps<Props>(), {
  value: () => "",
  language: () => "java",
  handleChange: (v: string) => {
    console.log(v);
  },
});

const codeEditorRef = ref();
const codeEditor = ref();

//监听props.value的变化，当props.value发生变化时，更新编辑器的内容
watch(
  () => props.language,
  () => {
    if (codeEditor.value) {
      //要使用toRaw进行操作不然会卡死
      monaco.editor.setModelLanguage(
        toRaw(codeEditor.value).getModel(),
        props.language
      );
    }
  }
);

// 您首先检查codeEditorRef是否存在，如果不存在，则直接返回。然后，您创建一个新的Monaco Editor实例
onMounted(() => {
  if (!codeEditorRef.value) {
    return;
  }

  codeEditor.value = monaco.editor.create(codeEditorRef.value, {
    value: props.value,
    language: props.language,
    automaticLayout: true,
    colorDecorators: true,
    minimap: {
      enabled: true,
    },
    readOnly: false,
    theme: "vs-dark",
  });

  // 编辑 监听内容变化  要先预加载这个方法
  codeEditor.value.onDidChangeModelContent(() => {
    props.handleChange(toRaw(codeEditor.value).getValue());
  });
});
</script>

<!--codeEditor是一个指向Monaco Editor实例的引用，
而codeEditorRef是一个用于获取Monaco Editor实例的引用-->
<template>
  <div
    id="code-editor"
    ref="codeEditorRef"
    style="min-height: 400px; height: 60vh"
  />
</template>

<style scoped></style>
