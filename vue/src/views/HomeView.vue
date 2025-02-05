<script setup>
import { inject } from 'vue'
const { page } = inject('ahoi')
</script>

<template>
  <main>
    <section class="home-section">
      <p>{{ page.fields.title.str() }}</p>
    </section>
  </main>
</template>

<style lang="sass"></style>