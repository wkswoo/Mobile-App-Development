// publish.js

Page({
  data: {
    images: [],
    title: '',
    category: ''
  },
  
  // 选择图片
  chooseImage() {
    wx.chooseMedia({
      count: 9 - this.data.images.length,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFiles = res.tempFiles.map(file => file.tempFilePath);
        this.setData({
          images: [...this.data.images, ...tempFiles]
        });
      }
    });
  },
  
  // 删除图片
  deleteImage(e) {
    const index = e.currentTarget.dataset.index;
    const images = [...this.data.images];
    images.splice(index, 1);
    this.setData({
      images: images
    });
  },
  
  // 标题输入
  onTitleInput(e) {
    this.setData({
      title: e.detail.value
    });
  },
  
  // 选择分类
  selectCategory(e) {
    this.setData({
      category: e.currentTarget.dataset.category
    });
  },
  
  // 提交表单
  submitForm() {
    if (!this.data.images.length) {
      wx.showToast({
        title: '请至少上传一张图片',
        icon: 'none'
      });
      return;
    }
    
    if (!this.data.title) {
      wx.showToast({
        title: '请输入活动标题',
        icon: 'none'
      });
      return;
    }
    
    if (!this.data.category) {
      wx.showToast({
        title: '请选择活动分类',
        icon: 'none'
      });
      return;
    }
    
    // 模拟提交成功
    wx.showToast({
      title: '发布成功',
      icon: 'success',
      duration: 1500,
      success: () => {
        setTimeout(() => {
          wx.navigateBack({ delta: 1 });
        }, 1500);
      }
    });
  }
});