<script setup lang="ts"></script>
<template>
  <div class="grid grid-cols-12 gap-2 text-gray-200">
    <div class="col-span-12 md:col-span-6 h-[300px] bg-primary rounded-xl p-4">
      <div class="px-4">
        <Icon name="bi:octagon" size="80" class="animate-rotate" />
      </div>
      <p class="mt-2">
        <span class="w-full block mb-2 text-blue-300 mt-2">mihail rutskiy</span>
        frontend-developer
        <span class="block mt-2"
          ><span class="text-blue-300">24</span> y.o</span
        >
      </p>
    </div>
    <div
      class="col-span-12 md:col-span-6 h-[250px] sm:h-[300px] bg-primary rounded-xl p-4 text-center"
    >
      <p class="mt-2">
        Let's make cool projects <span class="text-blue-300">together</span>
      </p>
      <a
        class="bg-orange-500 hover:bg-blue-300 hover:text-primary transition-colors rounded-xl p-2 flex justify-center gap-2 items-center mt-4 text-xl md:text-2xl"
        href="mailto:mrkwork@yandex.by"
        ><Icon name="material-symbols:alternate-email" />mrkwork@yandex.by</a
      >
    </div>
  </div>
</template>
