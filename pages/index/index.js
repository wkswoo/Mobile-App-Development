// index.js
Page({
  data: {
    // 打卡相关数据
    records: [], // 打卡记录数组
    currentRecord: {
      studyContent: '', // 学习了什么
      harvest: '', // 收获如何
    },
    totalDays: 0, // 累计打卡天数
  },
  onLoad() {
    // 加载已保存的打卡记录
    this.loadRecords()
  },
  loadRecords() {
    // 从本地存储加载打卡记录
    const records = wx.getStorageSync('records') || []
    this.setData({
      records: records,
      totalDays: records.length
    })
  },
  // 输入学习内容
  onStudyContentChange(e) {
    this.setData({
      "currentRecord.studyContent": e.detail.value
    })
  },
  // 输入收获
  onHarvestChange(e) {
    this.setData({
      "currentRecord.harvest": e.detail.value
    })
  },
  // 提交打卡
  submitRecord() {
    const { studyContent, harvest } = this.data.currentRecord
    if (!studyContent || !harvest) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      })
      return
    }
    
    // 创建新的打卡记录
    const newRecord = {
      id: Date.now().toString(), // 唯一ID
      date: new Date().toISOString().split('T')[0], // 打卡日期，格式：YYYY-MM-DD
      studyContent: studyContent,
      harvest: harvest
    }
    
    // 更新记录数组
    const updatedRecords = [newRecord, ...this.data.records]
    
    // 保存到本地存储
    wx.setStorageSync('records', updatedRecords)
    
    // 更新页面数据
    this.setData({
      records: updatedRecords,
      totalDays: updatedRecords.length,
      currentRecord: {
        studyContent: '',
        harvest: ''
      }
    })
    
    wx.showToast({
      title: '打卡成功',
      icon: 'success'
    })
  },
  // 删除打卡记录
  deleteRecord(e) {
    const recordId = e.currentTarget.dataset.id
    const updatedRecords = this.data.records.filter(record => record.id !== recordId)
    
    // 保存到本地存储
    wx.setStorageSync('records', updatedRecords)
    
    // 更新页面数据
    this.setData({
      records: updatedRecords,
      totalDays: updatedRecords.length
    })
    
    wx.showToast({
      title: '删除成功',
      icon: 'success'
    })
  }
})
