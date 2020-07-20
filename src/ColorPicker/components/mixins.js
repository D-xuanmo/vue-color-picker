export default {
  inject: ['colorRoot'],

  methods: {
    __confirm(val) {
      this.colorRoot._change(val)
      this.__close()
    },

    __close() {
      this.colorRoot.showPanel = false
    }
  }
}
