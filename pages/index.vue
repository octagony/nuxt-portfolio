<script setup lang="ts">
import { onBeforeMount, onMounted } from "vue"

const showLoader = ref<boolean>(true)

onBeforeMount(() => {
  showLoader.value = true
})

onMounted(() => {
  showLoader.value = false
})

useSeoMeta({
  title: "Mihail Rutskiy | Octagony",
  description: "Personal portfolio of Mihail Rutskiy (@octagony)",
})
</script>

<template>
  <div class="text-3xl">
    <TopCards />
    <Contacts />
    <Skills />
    <Projects />
    <About />
  </div>
</template>
