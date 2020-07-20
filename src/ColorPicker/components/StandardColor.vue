<template>
  <div class="x-color-picker__wrapper">
    <p class="x-color-picker__title">标准色</p>
    <ul class="x-color-picker__children">
      <li
        v-for="(color, i) in colors"
        :key="i"
        class="x-color-picker__children-item"
        :style="{
          width: `${colorRoot.colorBlockSize}px`,
          backgroundColor: color
        }"
        @click.stop="__confirm(color)"
      ></li>
    </ul>
  </div>
</template>

<script>
import baseMixin from './mixins'
export default {
  name: 'XStandardColor',

  mixins: [baseMixin],

  data() {
    return {
      colors: ['#C00000', '#FF0000', '#FFC000', '#FFFF00', '#92D050', '#00B050', '#00B0F0', '#0070C0', '#002060', '#7030A0']
    }
  }
}
</script>

<style lang="scss" scoped></style>
