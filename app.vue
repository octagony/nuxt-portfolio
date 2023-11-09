<template>
  <div>
    <NuxtLayout>
      <header>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/projects">Projects</NuxtLink></li>
        </ul>
      </header>
      <main>
        <NuxtPage />
      </main>
      <footer>Footer</footer>
    </NuxtLayout>
  </div>
</template>
