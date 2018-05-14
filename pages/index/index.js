//index.js
import api from '../../utils/api.js';

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
    
    //获取轮播图片
    const params = {
      key: 'mallName'
    }

    api.getBannerList(params).then((res) => {
      if (res.code === 404) {
        let text = '请在后台添加 banner 轮播图片';
        that.pop(text);
      } else {
        that.setData({
          banners: res.data
        })
      }
    }) 
  },

  pop: function(text) {
    wx.showModal({
      title: '提示',
      content: text,
      confirmText: '确定',
      confirmColor: '#EA473D',
      showCancel: false
    })
  }
})
