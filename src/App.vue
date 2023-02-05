<template>
  <Terminal
    ref="terminalRef"
    full-screen
    :on-submit-command="onSubmitCommand"
  />
</template>

<script setup lang="ts">
import { doCommandExecute } from "./core/commandExecutor";
import { onMounted, ref } from "vue";
import { useUserStore } from "./core/commands/user/userStore";
import Terminal from "./components/terminal/Terminal.vue";

const terminalRef = ref();

const onSubmitCommand = async (inputText: string) => {
  if (!inputText) {
    return;
  }
  const terminal = terminalRef.value.terminal;
  await doCommandExecute(inputText, terminal);
};

const userStore = useUserStore();
// const { loginUser } = storeToRefs(userStore);
</script>

<style></style>
