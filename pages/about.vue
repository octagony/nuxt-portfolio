<script setup lang="ts">
useSeoMeta({
  title: "About me | Octagony",
  description: "Personal portfolio of Mihail Rutskiy (@octagony)",
})
</script>
<template>
  <section class="leading-8">
    <NuxtLink to="/">
      <button class="bg-primary rounded-xl p-4 text-lg">go back</button>
    </NuxtLink>
    <div class="grid grid-cols-12 mt-2 gap-2 text-5xl">
      <div class="col-span-8 bg-primary rounded-xl p-4">
        So, my name is <span class="text-blue-300">Mikhail</span>. I was born in
        Belarus, and now I live in
        <span class="text-blue-300 drop-shadow-2xl">Minsk</span>
      </div>
      <div class="col-span-4 bg-primary rounded-xl p-4">
        <p>
          I am always interested in trying new frameworks and
          <span class="text-blue-300 drop-shadow-2xl">improve my skills</span>
        </p>
      </div>
      <div class="col-span-7 bg-primary rounded-xl p-4">
        <p class="mt-4">
          I've been frontend-developing for about<span
            class="text-blue-300 drop-shadow-2xl"
          >
            two years</span
          >, and during that time i have mastered a large number of tools
        </p>
        <p class="mt-4">
          From basic <span class="text-red-300 drop-shadow-2xl"> HTML</span>,
          <span class="text-blue-300 drop-shadow-2xl"> CSS</span> and
          <span class="text-yellow-300 drop-shadow-2xl"> JS</span>, to modern
          tools for developing -
          <span class="text-red-500 drop-shadow-2xl">Astro</span>,
          <span class="text-gray-400 drop-shadow-2xl">Remix</span>,
          <span class="text-gray-500 drop-shadow-2xl"
            >Next.js/<span class="text-green-300 drop-shadow-2xl"
              >Nuxt.js</span
            ></span
          >
          and more
        </p>
      </div>
      <div class="col-span-5 bg-primary rounded-xl p-4">
        As a working environment, i use different
        <span>Linux</span> distributions along with my
        <a
          class="text-emerald-400 drop-shadow-2xl border border-t-transparent border-r-transparent border-l-transparent border-b-emerald-300 hover:bg-emerald-400 rounded-md hover:text-gray-800 transition-all"
          href="https://github.com/octagony/dev_files"
          target="_blank"
          >Neovim config</a
        >, and

        <a
          class="text-indigo-400 drop-shadow-2xl border border-t-transparent border-r-transparent border-l-transparent border-b-indigo-300 hover:bg-indigo-400 rounded-md hover:text-gray-800 transition-all"
          href="https://github.com/octagony/dwm-config-files"
          target="_blank"
        >
          DWM</a
        >
        as window manager.
      </div>
      <div class="col-span-12 bg-primary rounded-xl p-4">
        <p>
          I am additionally learning the
          <span class="text-red-500 drop-shadow-2xl">Rust</span> programming
          language, as a server solution for my projects, and for developing
          <span class="text-blue-300 drop-shadow-2xl">CLI applications</span>
        </p>
      </div>
    </div>
  </section>
</template>
