// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    autoplay: true,
    interval: 3000,
    duration: 1200,
  },
  /* 科目刷题 */
  toggle(e) {
    console.log(e);
    var anmiaton = e.target.dataset.class;
    var that = this;
    that.setData({
     asd:anmiaton
    })
    setTimeout(function() {
      
      that.setData({
        asd:""
      })
      wx.navigateTo({
        url: "/pages/select/select1/index",
      })

    }, 1000)

  },
  /* 模拟刷题 */
  togglezhen(e) {
    console.log(e);
    var anmiaton = e.target.dataset.class;
    var that = this;
    that.setData({
     asdzhen:anmiaton
    })
    setTimeout(function() {
      
      that.setData({
        asdzhen:""
      })
      wx.navigateTo({
        url: "/pages/select/select2/index",
      })

    }, 1000)

  },
  togglemo(e) {
   
    var anmiaton = e.target.dataset.class;
    var that = this;
    that.setData({
     asdmo:anmiaton
    })
    setTimeout(function() {
      
      that.setData({
        asdmo:""
      })
      wx.navigateTo({
        url: "/pages/select/select3/index",
      })

    }, 1000)

  },
  onLoad: function () {
    var that = this; 
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1974284904,406830192&fm=26&gp=0.jpg"
        },
        {
          "id": 2,
          "imgurl": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2427700646,1642273873&fm=26&gp=0.jpg"
        },
        {
          "id": 3,
          "imgurl": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3333499792,3561560196&fm=26&gp=0.jpg"
        },
        {
          "id": 4,
          "imgurl": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=100081162,1738080222&fm=26&gp=0.jpg"
        }
      ]
    }; 
    var vaa = {
      "vaas":[
        {
          "imgurl":"/pages/icon/图片2.png",
          "text":"今日刷题数",
          "font":"0题"
        }, {
          "imgurl":"/pages/icon/图片1.png",
          "text":"今日准确率",
          "font":"0%"

        }, {
          "imgurl":"/pages/icon/图片3.png",
          "text":"考试倒计时",
          "font":"219天"
        },
      ]
    };
    var currenttime = new Date();
    var dar = "2021-10-10";
    var darr = new Date(dar.replace(/-/g,"/"));
    var day =parseInt((darr.getTime()-currenttime)/(1000*60*60*24));
    
    vaa.vaas[2].font= day+"天";
    that.setData({
      lunboData: data.datas,
      second:vaa.vaas
    })
  }
})
