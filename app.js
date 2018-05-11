//app.js
App({
  onLaunch: function () {
    const that = this;

    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/config/get-value',
      data: {
        key: 'mallName'
      },
      success: ((res) => {
        if (res.data.code === 0) {
          wx.setStorageSync('mallName', res.data.data.value)
        }
      })
    })
  },
  globalData: {
    userInfo: null,
    subDomain: 'tz',
    shareProfile: '百货购物商城'
  }
})