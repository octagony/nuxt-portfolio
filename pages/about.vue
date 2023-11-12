<script setup lang="ts">
useSeoMeta({
  title: "About me | Octagony",
  description: "Personal portfolio of Mihail Rutskiy (@octagony)",
})
</script>
<template>
  <section>
    <NuxtLink to="/">
      <button class="btn btn-primary rounded-xl text-xl">Go back</button>
    </NuxtLink>
    <div class="grid grid-cols-12 mt-2 gap-2 text-2xl">
      <div class="col-span-6 bg-primary rounded-xl p-4">
        <p class="mt-4">
          So, my name is <span class="text-blue-300">Mikhail</span>. I was born
          in Belarus, and now I live in
          <span class="text-blue-300">Minsk</span>
        </p>

        <p class="mt-4">
          I am always interested in trying new frameworks and
          <span class="text-blue-300">improve my skills</span>
        </p>
      </div>
      <div class="col-span-6 bg-primary rounded-xl p-4">
        <p class="mt-4">
          I've been frontend-developing for about<span class="text-blue-300">
            two years</span
          >, and during that time i have mastered a large number of tools - from
          basic <span class="text-red-300"> HTML</span>,
          <span class="text-blue-300"> CSS</span> and
          <span class="text-yellow-300"> JS</span>, to modern tools for
          developing - <span class="text-red-500">Astro</span>,
          <span class="text-gray-400">Remix</span>,
          <span class="text-gray-500"
            >Next.js/<span class="text-green-300">Nuxt.js</span></span
          >
          and more
        </p>
        <p class="mt-4">
          As a working environment, i use different
          <span>Linux</span> distributions (i prefer Arch/Debian-based distros),
          along with my
          <a
            class="text-emerald-400 border border-t-transparent border-r-transparent border-l-transparent border-b-emerald-300 hover:bg-emerald-400 rounded-md hover:text-gray-800 transition-all"
            href="https://github.com/octagony/dev_files"
            target="_blank"
            >Neovim config</a
          >, and

          <a
            class="text-indigo-400 border border-t-transparent border-r-transparent border-l-transparent border-b-indigo-300 hover:bg-indigo-400 rounded-md hover:text-gray-800 transition-all"
            href="https://github.com/octagony/dwm-config-files"
            target="_blank"
          >
            DWM</a
          >
          as window manager.
        </p>
      </div>
      <div class="col-span-12 bg-primary rounded-xl p-4">
        <p>
          I am additionally learning the
          <span class="text-red-500">Rust</span> programming language, as a
          server solution for my projects, and for developing
          <span class="text-blue-300">CLI applications</span>
        </p>
      </div>
    </div>
  </section>
</template>
