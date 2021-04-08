// index.js
// 获取应用实例
const app = getApp()

var bt=1

var colorb=1
var colora=1
var colorc=1
var colord=1

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
    answer:"",
    colorb:"blue",
    colora:"blue",
    colorc:"blue",
    colord:"blue",
    
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
    app.globalData.qq=app.globalData.qq-1
    console.log(app.globalData.qq)
    this.setData({
      display:"none",
    })
    this.onLoad()
  },
  btnxia:function(){
    app.globalData.qq=app.globalData.qq+1
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
  A:function(){
    if (colora == 1){
    this.setData({
      colora:"green"
    })
    colora=2;
    }else{
      this.setData({
        colora:"blue"
      })
      colora =1
    }
    
  },
  B:function(){
    if (colorb == 1){
      this.setData({
        colorb:"green"
      })
      colorb=2;
      }else{
        this.setData({
          colorb:"blue"
        })
        colorb =1
      }
  },
  C:function(){
    if (colorc == 1){
      this.setData({
        colorc:"green"
      })
      colorc=2;
      }else{
        this.setData({
          colorc:"blue"
        })
        colorc =1
      }
  },
  D:function(){
    if (colord == 1){
      this.setData({
        colord:"green"
      })
      colord=2;
      }else{
        this.setData({
          colord:"blue"
        })
        colord =1
      }
  },
  all:function(){
    wx.navigateTo({
      url: '/pages/select/select1/yimes/index',
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
                id:qww[app.globalData.qq].id,
                title:qww[app.globalData.qq].title,
                A:qww[app.globalData.qq].A,
                B:qww[app.globalData.qq].B,
                C:qww[app.globalData.qq].C,
                D:qww[app.globalData.qq].D,
                answer:qww[app.globalData.qq].answer,
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
   /*  q= 0; */
/*    app.globalData.qq = 0 */
   
  }
})
