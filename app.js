//app.js
import api from './utils/api.js';

App({
  onLaunch: function () {
    const that = this;

    const params = { 
      key: 'mallName',
    }

    api.getMallName(params).then((res) => {
      if (res.data.code === 0) {
        wx.setStorageSync('mallName', res.data.data.value)
      }
    })
  },
  globalData: {
    userInfo: null,
    shareProfile: '百货购物商城'
  }
})