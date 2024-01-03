<script setup lang="ts">
const skills = [
  { name: "React", icon: "devicon:react" },
  { name: "Vue", icon: "devicon:vuejs" },
  { name: "Nextjs", icon: "logos:nextjs-icon" },
  { name: "Nuxtjs", icon: "devicon:nuxtjs" },
  { name: "Typescript", icon: "logos:typescript-icon" },
  { name: "TailwindCSS", icon: "devicon:tailwindcss" },
  { name: "Astro", icon: "vscode-icons:file-type-astro" },
  { name: "Pinia", icon: "logos:pinia" },
  { name: "Redux", icon: "logos:redux" },
  { name: "Firebase", icon: "vscode-icons:file-type-firebase" },
  { name: "React Router", icon: "devicon:reactrouter" },
  { name: "Nestjs", icon: "logos:nestjs" },
]
</script>
<template>
  <div class="grid grid-cols-12 gap-2 mt-2">
    <div class="col-span-12 md:col-span-4 h-[200px] bg-primary rounded-xl p-4">
      <div class="grid grid-cols-4 h-full gap-4 place-items-center">
        <template v-for="skill in skills" :key="skill.name">
          <Icon :name="skill.icon" />
        </template>
      </div>
    </div>
    <div
      class="col-span-12 md:col-span-8 md:h-[200px] bg-primary rounded-xl p-4 text-center"
    >
      <p class="mt-2">
        as a developer, i like to implement
        <span class="text-blue-300">new technologies</span> into my projects
      </p>
    </div>
  </div>
</template>
