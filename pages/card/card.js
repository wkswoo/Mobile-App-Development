// card.js
Page({
  data: {
    userInfo: {
      name: "张明",
      title: "高级前端工程师",
      company: "科技有限公司",
      avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20avatar%20headshot%20business%20person&image_size=square",
      phone: "138****8888",
      email: "zhangming@example.com",
      wechat: "zhangming_wechat",
      bio: "5年前端开发经验，专注于微信小程序和Web应用开发。精通Vue、React等前端框架，熟悉Node.js后端开发。热爱技术分享，曾在多个技术大会上发表演讲。",
      skills: ["HTML5", "CSS3", "JavaScript", "Vue", "React", "微信小程序", "Node.js"]
    }
  },

  // 拨打电话
  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: this.data.userInfo.phone
    });
  },

  // 发送邮件
  sendEmail() {
    wx.showModal({
      title: "发送邮件",
      content: `是否打开邮件应用发送邮件到 ${this.data.userInfo.email}？`,
      success: (res) => {
        if (res.confirm) {
          wx.setClipboardData({
            data: this.data.userInfo.email,
            success: () => {
              wx.showToast({
                title: "邮箱已复制到剪贴板",
                icon: "success"
              });
            }
          });
        }
      }
    });
  },

  // 打开微信
  openWechat() {
    wx.setClipboardData({
      data: this.data.userInfo.wechat,
      success: () => {
        wx.showToast({
          title: "微信号已复制到剪贴板",
          icon: "success"
        });
      }
    });
  },

  // 分享名片
  shareCard() {
    wx.showActionSheet({
      itemList: ["分享给朋友", "分享到朋友圈", "保存图片"],
      success: (res) => {
        switch (res.tapIndex) {
          case 0:
            wx.showToast({ title: "分享给朋友功能开发中", icon: "none" });
            break;
          case 1:
            wx.showToast({ title: "分享到朋友圈功能开发中", icon: "none" });
            break;
          case 2:
            wx.showToast({ title: "保存图片功能开发中", icon: "none" });
            break;
        }
      }
    });
  },

  // 保存名片
  saveCard() {
    wx.setStorageSync('userCard', this.data.userInfo);
    wx.showToast({
      title: "名片已保存",
      icon: "success"
    });
  },

  onLoad() {
    // 页面加载时的初始化
    console.log('个人名片页面加载');
  },

  onShareAppMessage() {
    // 分享配置
    return {
      title: `${this.data.userInfo.name}的个人名片`,
      path: '/pages/card/card',
      imageUrl: this.data.userInfo.avatar
    };
  }
});