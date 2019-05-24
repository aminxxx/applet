// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info : []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.id);
    wx.request({
      url: 'http://139.155.100.192/detailes?id='+options.id,
      success(res) {
        //console.log(res.data)
        that.setData({
          info: res.data
        })
       // console.log(that.data.info);
      }
    })

  },
  fn() {
    wx.navigateBack({
      delta :1
    })
  }
})