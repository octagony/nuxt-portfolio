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
  <div>
    <Head>
      <Title>{{ project.title }} | Octagony</Title>
      <Meta name="description" :content="project.description"></Meta>
    </Head>
    <section>
      <NuxtLink to="/">
        <button class="btn btn-primary rounded-xl text-xl">Go back</button>
      </NuxtLink>
      <div class="grid grid-cols-12 gap-2 mt-2">
        <div class="col-span-6 h-[350px] bg-primary rounded-xl p-4">
          <img
            :src="project.img"
            :alt="project.description"
            class="w-full h-full rounded-xl"
          />
        </div>
        <div class="col-span-6 h-[350px] bg-primary rounded-xl p-4">
          <div class="mt-8">
            <h1 class="text-blue-300 text-6xl">{{ project.title }}</h1>
            <p class="mt-4">{{ project.subtitle }}</p>
          </div>
        </div>
        <div class="col-span-12 h-[150px] bg-primary rounded-xl p-4">
          <p class="text-center mb-6">builded with:</p>
          <ul class="h-full text-2xl flex flex-wrap justify-around mt-4">
            <li v-for="tool in project.tools" :key="tool">
              <span class="text-primary bg-blue-300 p-2 rounded-xl">{{
                tool
              }}</span>
            </li>
          </ul>
        </div>
        <div class="col-span-8 h-[200px] bg-primary rounded-xl p-4">
          <p class="text-2xl font-medium">{{ project.description }}</p>
        </div>
        <div class="col-span-4 h-[200px] bg-primary rounded-xl p-4">
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
    </section>
  </div>
</template>
