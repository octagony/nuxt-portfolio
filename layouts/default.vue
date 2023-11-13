<script setup lang="ts">
import { ref, onBeforeMount, onMounted } from "vue"

const showLoader = ref<boolean>(true)

onBeforeMount(() => {
  showLoader.value = true
})

onMounted(() => {
  showLoader.value = false
})
</script>

<template>
  <Loader v-if="showLoader" />
  <div v-else class="grid">
    <slot />
    <Footer />
  </div>
</template>
