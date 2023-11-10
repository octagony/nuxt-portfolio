<script setup>
const route = useRoute()

const { data } = await useFetch("/api/projects")

const project = data.value
  .filter((project) => {
    return project.id === +route.params.id
  })
  .at(0)
</script>

<template>
  <div class="grid grid-cols-12 gap-2">
    <div class="col-span-6 h-[350px] bg-primary rounded-xl p-4">
      <img :src="project.img" class="w-full h-full rounded-xl" />
    </div>
    <div class="col-span-6 h-[350px] bg-primary rounded-xl p-4">
      <div class="mt-8">
        <p class="text-blue-300">{{ project.title }}</p>
        <p>{{ project.subtitle }}</p>
      </div>
    </div>
    <div class="col-span-12 h-[150px] bg-primary rounded-xl p-4">
      <p class="text-center">builded with:</p>
      <ul class="text-3xl flex justify-around mt-4">
        <li v-for="tool in project.tools" :key="tool">
          <span class="text-primary bg-blue-300 p-2 rounded-xl">{{
            tool
          }}</span>
        </li>
      </ul>
    </div>
    <div class="col-span-8 h-[150px] bg-primary rounded-xl p-4">
      <p class="text-2xl">{{ project.description }}</p>
    </div>
    <div class="col-span-4 h-[150px] bg-primary rounded-xl p-4">
      <a
        :href="project.githubLink"
        class="btn bg-blue-300 text-primary text-xl rounded-xl hover:bg-primary hover:text-blue-300"
        ><Icon name="uil:github" />Link to project on Github</a
      >
      <a
        :href="project.websiteLink"
        class="btn bg-blue-300 text-primary text-xl rounded-xl hover:bg-primary hover:text-blue-300"
        ><Icon name="gg:website" />Link to website project</a
      >
    </div>
  </div>
</template>
