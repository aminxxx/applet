// pages/home/home.js
var bmap = require("../../utils/bmap-wx.min.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls : [],
    newMoive : [],
    city : ''
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://139.155.100.192/douban', 
      success(res) {
       // console.log(res)
        //console.log(res.data.subjects);
        var arr = res.data.subjects.map(function(item,index){
          return item.images.large;
        })
        //console.log(arr);
        that.setData({
          imgUrls:arr,
        })
       // console.log(that.data.imgUrls)
      }
    })
    wx.request({
      url: 'http://139.155.100.192/newMovie',
      success(res){
        //console.log(res.data.subjects);
        var arr1 = res.data.subjects.map(function(item,index){
          return {
            img: item.images.small,
            id : item.id,
            title : item.title
          }
        })
       // console.log(arr1);
        that.setData({
         newMoive : arr1
        })
        //console.log(that.data.newMoive)
      }
    })
    //获取经纬度
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log(latitude,longitude);
        var BMap = new bmap.BMapWX({
          ak: 'lBvT8fZFPlj4ubGItDx2vZb6vcZRthfv'
        });

        BMap.regeocoding({ 
          location: latitude+','+longitude,
          success(data){
            console.log(data.originalData.result.addressComponent.city);
            that.setData({
              city: data.originalData.result.addressComponent.city
            })
          }
        })

      }
    })

  },
  //获取id
  fn(ev) {
    console.log(ev.target.dataset.id);
   wx.navigateTo({
     url: '../info/info?id=' + ev.target.dataset.id,
   })
  },

})