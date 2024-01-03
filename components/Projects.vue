<template>
  <div class="grid grid-cols-12 h-[500px] mt-2 gap-2">
    <div class="col-span-12 md:col-span-8 bg-primary rounded-xl">
      <Carousel>
        <Slide v-for="slide in 8" :key="slide">
          <div class="carousel__item">
            <NuxtLink :to="`/projects/${slide}`">
              <img
                :src="`/projectsImages/${slide}.jpeg`"
                class="rounded-3xl h-[450px] w-full object-contain md:object-cover"
              />
            </NuxtLink>
          </div>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
    <div class="hidden md:block col-span-4 bg-primary p-4 rounded-xl">
      <p>and you can take a <span class="text-blue-300">look</span> at them</p>
    </div>
  </div>
</template>

<style>
.carousel {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.carousel_viewport {
  height: 100%;
}

.carousel__item {
  min-height: 250px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel_pagination {
  display: block;
  margin-top: 1rem;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
