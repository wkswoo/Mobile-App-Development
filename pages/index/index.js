// index.js
// 导入mock数据
const { posterData } = require('../../data.js');

Page({
  data: {
    searchText: '',
    posters: [],
    filteredPosters: []
  },
  
  // 搜索输入事件
  onSearchInput(e) {
    const searchText = e.detail.value;
    this.setData({
      searchText: searchText,
      // 根据搜索文本过滤海报数据
      filteredPosters: this.data.posters.filter(poster => 
        poster.title.toLowerCase().includes(searchText.toLowerCase())
      )
    });
  },
  
  // 生命周期函数
  onLoad() {
    // 初始化数据
    this.loadPosters();
  },
  
  // 页面显示时重新加载数据
  onShow() {
    this.loadPosters();
  },
  
  // 加载海报数据
  loadPosters() {
    // 从本地存储中获取海报数据，如果没有则使用mock数据
    const storedPosters = wx.getStorageSync('posters');
    const posters = storedPosters && storedPosters.length > 0 ? storedPosters : posterData;
    
    this.setData({
      posters: posters,
      filteredPosters: posters
    });
  },
  
  // 预览图片
  previewImage(e) {
    const index = e.currentTarget.dataset.index;
    const images = this.data.filteredPosters.map(item => item.image);
    wx.previewImage({
      current: images[index],
      urls: images
    });
  },
  
  // 跳转到发布页面
  navigateToPublish() {
    wx.navigateTo({
      url: '/pages/publish/publish'
    });
  }
});