// index.js
// 获取应用实例
const app = getApp()

var bt=1
var q = 0
Page({

  data: {
    display:"none",
    btn:"back",
    direction:"0",
    id:"1",
    title:"今晚的星星很亮 但我知道你没有在抬头望 仔细想想 这真是星星的损失",
    A:"今晚的星星很亮 但我知道你没有在抬头望 仔细想想 这真是星星的损失",
    B:"今晚的星星很亮 但我知道你没有在抬头望 仔细想想 这真是星星的损失",
    C:"今晚的星星很亮 但我知道你没有在抬头望 仔细想想 这真是星星的损失",
    D:"今晚的星星很亮 但我知道你没有在抬头望 仔细想想 这真是星星的损失",
    answer :"",
  },
  btn:function(){
    if(bt==1){
      this.setData({
      btn:"right",
      direction:"-70%"
    })
    bt=2
    }else{
      this.setData({
        btn:"back",
        direction:"0"

      })
      bt=1
    }
    
  },
  btnshang:function(){
    q = q - 1
    this.setData({
      display:"none",
    })
    this.onLoad()
  },
  btnxia:function(){
    q = q + 1
    this.setData({
      display:"none",
    })
    this.onLoad()
  },
  btntijiao:function(){
    this.setData({
      display:"block",
    })
   
  },
  onLoad:function(){
    var that = this
    wx.login({
      success (res) {
        /* 授权登陆 */
 
        if (res.code) {
      
          //发起网络请求
          wx.request({
            url: 'http://yiyiyiyi.top/web.php',
            method:"POST",
            data: {
              marker:app.globalData.marker
            },
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
           
            success:function(e){
              var qww = e.data
              that.setData({
                id:qww[q].id,
                title:qww[q].title,
                A:qww[q].A,
                B:qww[q].B,
                C:qww[q].C,
                D:qww[q].D,
                answer:qww[q].answer,
              })
             /*  console.log(e.data) */
            }
          })
        
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

  },
  onShow:function(){
    q= 0;
  }
})
