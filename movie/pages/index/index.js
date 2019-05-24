//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    imgUrls: ['../../img/b1.jpg', '../../img/b2.jpg','../../img/b3.jpg']
  },
  click(){
    wx.navigateTo({
      url: '../home/home',
    })
  }
})
