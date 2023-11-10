<script setup lang="ts">
import { Linkedin, Github, Send } from "lucide-vue-next"
</script>
<template>
  <div class="grid grid-cols-12 mt-2 gap-2 text-3xl">
    <div class="col-span-4 bg-primary rounded-xl p-4">
      <a
        href="https://www.linkedin.com/in/mihail-rutskiy-7a309323a/"
        class="flex items-center gap-4 justify-center"
        target="_blank"
      >
        <Icon name="uil:linkedin" />
        <span>Linkedin</span></a
      >
    </div>
    <div class="col-span-4 bg-primary rounded-xl p-4">
      <a
        href="https://github.com/octagony"
        class="flex items-center gap-4 justify-center"
        target="_blank"
      >
        <Icon name="uil:github" />
        <span>Github</span></a
      >
    </div>
    <div class="col-span-4 bg-primary rounded-xl p-4">
      <a
        href="https://t.me/moctagony"
        target="_blank"
        class="flex items-center gap-4 justify-center"
      >
        <Icon name="uil:telegram" /><span>Telegram</span></a
      >
    </div>
  </div>
</template>
