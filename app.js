// app.js
App({
  globalData: {
    marker : "",
    qq:""
  },
  onLaunch:function(){
    wx.login({
    timeout: 10000,
    success:function(res){
     
      if (res.code){
         //发起网络请求
    wx.request({
      url:"http://3801384c9t.wicp.vip/web/wx.php",
     /*  url: "https://api.weixin.qq.com/sns/jscode2session?appid=wx93af6300ad74b8f2&secret=b2ec3bee865dc6e28f072d3a91f053aa&js_code="+res.code+"&grant_type=authorization_code", */
      method:"POST",
        header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        code:res.code
        },
      success:function(e){
        console.log(e.data)
        
        wx.setStorage({
          key:"openid",
          data:e.data.openid,
        })
        wx.request({
          url: 'http://3801384c9t.wicp.vip/web/',
        })
      }
     })
    } else {
    console.log('登录失败！' + res.errMsg)
      }
    }
  })
  }
  

})