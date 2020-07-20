<template>
  <div class="x-color-picker__wrapper">
    <p class="x-color-picker__title">主题颜色</p>
    <ul class="x-color-picker__list">
      <li v-for="(item, i) in colors" :key="i" class="x-color-picker__list-item">
        <ul class="x-color-picker__children">
          <li
            v-for="(color, j) in item"
            :key="j"
            class="x-color-picker__children-item"
            :style="{
              width: `${colorRoot.colorBlockSize}px`,
              backgroundColor: color
            }"
            @click.stop="__confirm(color)"
          ></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import baseMixin from './mixins'
export default {
  name: 'XThemeColor',

  mixins: [baseMixin],

  data() {
    return {
      colors: [
        ['#ffffff', '#000000', '#E7E6E6', '#44546A', '#5B9BD5', '#ED7D31', '#A5A5A5', '#FFC000', '#4472C4', '#70AD47'],
        ['#f2f2f2', '#808080', '#D0CECE', '#D6DCE5', '#DEEBF7', '#FBE5D6', '#EDEDED', '#FFF2CC', '#DAE3F3', '#E2F0D9'],
        ['#D9D9D9', '#595959', '#AFABAB', '#ADB9CA', '#BDD7EE', '#F8CBAD', '#DBDBDB', '#FFE699', '#B4C7E7', '#C5E0B4'],
        ['#BFBFBF', '#404040', '#767171', '#8497B0', '#9DC3E6', '#F4B183', '#C9C9C9', '#FFD966', '#8FAADC', '#A9D18E'],
        ['#A6A6A6', '#262626', '#3B3838', '#333F50', '#2E75B6', '#C55A11', '#7C7C7C', '#BF9000', '#2F5597', '#548235'],
        ['#7F7F7F', '#0D0D0D', '#181717', '#222A35', '#222A35', '#843C0B', '#535353', '#7F6000', '#203864', '#385723']
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
