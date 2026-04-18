// poster-card.js
Component({
  properties: {
    poster: {
      type: Object,
      value: {}
    },
    index: {
      type: Number,
      value: 0
    }
  },
  methods: {
    // 预览图片
    previewImage(e) {
      // 触发自定义事件，通知父组件执行预览操作
      this.triggerEvent('preview', {
        index: e.currentTarget.dataset.index
      });
    }
  }
});