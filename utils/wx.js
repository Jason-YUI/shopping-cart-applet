export const request = {
  get: (url, data) => {
    return new Promise((reslove, reject) => {
      wx.request({
        url: 'url',
        method: 'GET',
        data: data,
        success: (res) => {
          reslove(res.data)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  },
  
  post: (url, data) => {
    return new Promise((reslove, reject) => {
      wx.request({
        url: 'url',
        method: 'POST',
        data: data,
        success: (res) => {
          reslove(res.data)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  }
} 