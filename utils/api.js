//  业务接口
import { request } from '../utils/wx.js';

const HOST = 'https://api.it120.cc';

const api = {

  //获取商城名称
  getMallName: (data) => request.post(`${HOST}/tz/config/get-value?key=${data.key}`),

  //轮播图片
  getBannerList: (data) => request.post(`${HOST}/tz/banner/list`)
}

export default api