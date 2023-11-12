<template>
  <section class="grid grid-cols-12 mt-2 gap-2 text-3xl">
    <div class="col-span-9 bg-primary p-4 rounded-xl">
      <p>
        if you want to know more about me, go here
        <Icon name="material-symbols:arrow-right-alt-rounded" />
      </p>
    </div>
    <div class="col-span-3 bg-primary p-4 rounded-xl">
      <NuxtLink to="/about">
        <a
          class="w-full rounded-xl btn border-none text-gray-900 bg-blue-300 text-2xl flex items-center justify-center hover:scale-105 hover:bg-blue-400 hover:border-primary"
        >
          <Icon name="material-symbols:account-circle" />
          About me</a
        ></NuxtLink
      >
    </div>
  </section>
</template>
