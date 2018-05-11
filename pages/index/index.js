//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    autoplay: true,
    interval: 3000,
    duration: 1000
  },

  onLoad: function() {
    const that = this;

    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    }) 
  }
})
