// index.js
// 导入mock数据
const { posterData } = require('../../data.js');

Page({
  data: {
    searchText: '',
    posters: posterData,
    filteredPosters: posterData
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
    this.setData({
      filteredPosters: this.data.posters
    });
  }
});