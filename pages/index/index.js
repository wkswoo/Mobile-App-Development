Page({
  data: {
    // 基本信息
    name: "张三", // 姓名
    grade: "2022级", // 年级
    college: "计算机学院", // 学院
    
    // 联系方式 - 使用对象数组
    contacts: [
      {
        type: "qq", // 联系方式类型
        value: "123456789", // 联系方式值
        label: "QQ" // 显示标签
      },
      {
        type: "wechat",
        value: "zhangsan_wechat",
        label: "微信"
      },
      {
        type: "phone",
        value: "13800138000",
        label: "手机号"
      }
    ],
    
    // 个人技能
    skills: [
      "JavaScript",
      "HTML/CSS",
      "微信小程序开发",
      "UI设计"
    ],
    
    // 个人成就
    achievements: [
      "2023年校级优秀学生",
      "全国大学生计算机设计大赛三等奖",
      "英语四级证书"
    ],
    
    // 个人简介
    bio: "热爱编程，积极向上，善于团队合作。希望在小程序开发领域不断学习和成长。"
  },
  
  // 技能标签点击事件处理函数
  onSkillTap: function(e) {
    // 获取点击的技能名称
    const skill = e.currentTarget.dataset.skill;
    // 弹出提示
    wx.showToast({
      title: `你点击了：${skill}`,
      icon: 'none',
      duration: 2000
    });
  }
})