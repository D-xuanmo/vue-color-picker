<template>
  <div class="x-color-picker__container">
    <div
      class="x-color-picker__trigger"
      :style="{
        backgroundColor: value
      }"
      @click.stop="_showPanelEvent"
    ></div>
    <div v-show="showPanel" ref="panel" class="x-color-picker__panel" :style="panelStyle">
      <theme-color />
      <standard-color />
      <more-color />
    </div>
  </div>
</template>

<script>
import ThemeColor from './components/ThemeColor'
import StandardColor from './components/StandardColor'
import MoreColor from './components/MoreColor'

export default {
  name: 'XColorPicker',

  provide() {
    return {
      colorRoot: this
    }
  },

  components: {
    ThemeColor,
    StandardColor,
    MoreColor
  },

  props: {
    value: {
      type: String,
      default: '#000000'
    },

    colorBlockSize: {
      type: Number,
      default: 20
    }
  },

  data() {
    return {
      showPanel: false,
      panelStyle: {
        left: 0
      }
    }
  },

  mounted() {
    document.addEventListener('click', () => this.showPanel = false, false)
  },

  methods: {
    _change(val) {
      this.$emit('input', val)
      this.$emit('change', val)
    },

    _showPanelEvent(e) {
      this.showPanel = !this.showPanel
      this.$nextTick(() => {
        const windowWidth = window.innerWidth
        if (e.pageX > windowWidth / 2) {
          this.panelStyle.left = `${-this.$refs.panel.offsetWidth + 20}px`
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ * {
  margin: 0;
  padding: 0;
}
/deep/ li {
  list-style: none;
}
/deep/ input[type="color"] {
  margin-left: 5px;
}
</style>

<style lang="scss">
$border-radius: 4px;
.x-color-picker__container {
  position: relative;
  width: 20px;
  height: 20px;
}
.x-color-picker__trigger {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #000000;
  border: 1px solid #e6e6e6;
  border-radius: $border-radius;
  cursor: pointer;
}
.x-color-picker__panel {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 99999;
  padding: 3px 8px 8px 3px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: $border-radius;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  transform: translate(0, 5px);
}
.x-color-picker__wrapper {
  &:not(:first-of-type) {
    margin-top: 10px;
  }
}
.x-color-picker__title {
  padding: 5px 0 0 5px;
  font-size: 14px;
  text-align: left;
  color: #000;
}
.x-color-picker__children {
  display: flex;
}
.x-color-picker__children-item {
  width: 20px;
  height: 20px;
  margin: 5px 0 0 5px;
  cursor: pointer;
}
</style>
