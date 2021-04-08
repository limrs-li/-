// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {

  },
  mabindplay:function(e){
    app.globalData.marker = e.currentTarget.dataset.ma;
    
    wx.navigateTo({
      url: '/pages/analyse/analyse/index',
      
    })
  },
})
