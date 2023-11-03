<template>
  <nav>
    <router-link to="/" class="text-3xl text-red-500">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
@import "/src/assets/style";
</style>
