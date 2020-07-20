<template>
  <div id="app">
    <x-color-picker v-model="color" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      color: ''
    }
  }
}
</script>

<style>
</style>
