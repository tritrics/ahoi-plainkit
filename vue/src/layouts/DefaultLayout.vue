<script setup>
import HeaderSection from '../sections/HeaderSection.vue'
import FooterSection from '../sections/FooterSection.vue'
import OverlaySection from '../sections/OverlaySection.vue'
</script>

<template>
  <HeaderSection />
  <slot></slot>
  <FooterSection />
  <OverlaySection />
</template>

<style lang="sass"></style>