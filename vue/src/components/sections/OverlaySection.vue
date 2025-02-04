<script setup>
import { inject } from 'vue'
const { stores } = inject('ahoi')
const show = stores('router').ref('overlay')
</script>

<template>
  <div class="overlay-section" :class="{ 'is-visible': show }">
    <span class="spinner"></span>
  </div>
</template>

<style lang="sass">
@keyframes loader-animation
  0%
    transform: scale(0)
    opacity: 1
  100%
    transform: scale(1)
    opacity: 0

.overlay-section
  position: fixed
  display: none
  width: 100%
  left: 0
  right: 0
  top: 0
  bottom: 0
  background-color: rgba(0,0,0,.2)
  z-index: var(--z-overlay)
  &.is-visible
    display: block
  .spinner
    position: absolute
    display: inline-block
    left: 50%
    top: 50%
    width: 78px
    height: 78px
    transform: translate(-50%, -50%)
    &::after,
    &::before
      position: absolute
      box-sizing: border-box
      content: ''
      left: 0
      top: 0
      width: 78px
      height: 78px
      border-radius: 50%
      background: var(--color-white)
      animation: loader-animation 1s linear infinite
</style>