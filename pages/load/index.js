const app = getApp();
Page({
  data: {
  },

  goToIndex: function () {
    wx.switchTab({
      url: '/pages/index/index',
    });
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })
  }
})