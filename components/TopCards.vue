<script setup lang="ts"></script>
<template>
  <div class="grid grid-cols-12 gap-2">
    <div class="col-span-8 h-[300px] bg-primary rounded-xl p-4">
      <p class="mt-8">
        <span class="w-full block mb-2 text-blue-300">mihail rutskiy</span> is a
        frontend-developer
      </p>
    </div>
    <div class="col-span-4 h-[300px] bg-primary rounded-xl p-4 text-center">
      <p class="mt-2">
        Let's make cool projects <span class="text-blue-300">together</span>
      </p>
      <a
        class="bg-orange-500 hover:bg-blue-300 hover:text-primary transition-colors rounded-xl p-2 flex justify-center items-center mt-4 text-2xl"
        href="mailto:mrkwork@yandex.by"
        ><Icon
          name="material-symbols:alternate-email"
          class="mt-2 mr-2"
        />mrkwork@yandex.by</a
      >
    </div>
  </div>
</template>
