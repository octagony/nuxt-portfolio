<script setup lang="ts">
const route = useRoute()

const { data } = await useFetch("/api/projects")

const project =
  data.value &&
  data?.value
    .filter((project) => {
      return project.id === +route.params.id
    })
    .at(0)
</script>

<template>
  <div>
    <Head>
      <Title>{{ project?.title }} | Octagony</Title>
      <Meta name="description" :content="project?.description"></Meta>
    </Head>
    <section>
      <NuxtLink to="/">
        <button class="btn btn-primary rounded-xl text-xl">Go back</button>
      </NuxtLink>
      <div class="grid grid-cols-12 gap-2 mt-2">
        <div
          class="col-span-12 md:col-span-6 md:h-[350px] bg-primary rounded-xl p-4"
        >
          <img
            :src="project?.img"
            :alt="project?.description"
            class="w-full h-full rounded-xl"
          />
        </div>
        <div
          class="col-span-12 md:col-span-6 md:h-[350px] bg-primary rounded-xl p-4"
        >
          <div class="my-4">
            <h1 class="text-blue-300 text-5xl md:text-6xl">
              {{ project?.title }}
            </h1>
            <p class="mt-4 text-3xl md:text-4xl">{{ project?.subtitle }}</p>
          </div>
        </div>
        <div class="col-span-12 bg-primary rounded-xl p-4">
          <p class="text-center mb-6">builded with:</p>
          <ul
            class="text-2xl md:text-2xl grid gap-8 grid-cols-2 place-items-center md:flex md:flex-wrap md:justify-around mt-4"
          >
            <li
              v-for="tool in project?.tools"
              :key="tool"
              class="[&:nth-child(7)]:col-span-full"
            >
              <span class="text-primary bg-blue-300 p-2 rounded-xl">{{
                tool
              }}</span>
            </li>
          </ul>
        </div>
        <div
          class="col-span-12 lg:col-span-8 md:h-[200px] bg-primary rounded-xl p-4"
        >
          <p class="text-2xl font-bold">{{ project?.description }}</p>
        </div>
        <div
          class="col-span-12 lg:h-[200px] bg-primary rounded-xl p-4 text-center place-items-center lg:col-span-4"
        >
          <a
            :href="project?.githubLink"
            class="btn bg-blue-300 flex items-center text-primary text-xl rounded-xl hover:bg-primary hover:text-blue-300 mx-auto md:max-w-max lg:mx-0"
            ><Icon name="uil:github" />Link to Github</a
          >
          <a
            :href="project?.websiteLink"
            class="btn bg-blue-300 flex items-center text-primary text-xl rounded-xl hover:bg-primary hover:text-blue-300 mt-8 mx-auto md:max-w-max lg:mx-0"
            ><Icon name="gg:website" />Link to website project</a
          >
        </div>
      </div>
    </section>
  </div>
</template>
