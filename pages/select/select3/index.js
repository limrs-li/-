// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {

  },
  bindtap1:function(e){
    wx.navigateTo({
      url: '/pages/select/select3/select31/index',
    })
  app.globalData.marker = e.currentTarget.dataset.ma;
  },
  bindtap2:function(e){
    wx.navigateTo({
      url: '/pages/select/select3/select31/index',
    })
  app.globalData.marker = e.currentTarget.dataset.ma;
  },
  bindtap3:function(e){
    wx.navigateTo({
      url: '/pages/select/select3/select31/index',
    })
  app.globalData.marker = e.currentTarget.dataset.ma;
  },
  bindtap4:function(e){
    wx.navigateTo({
      url: '/pages/select/select3/select31/index',
    })
  app.globalData.marker = e.currentTarget.dataset.ma;
  }

})
