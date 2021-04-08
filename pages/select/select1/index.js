// index.js
// 获取应用实例
const app = getApp()
var a = 1
var amao = 1
var ajin = 1
var asi = 1
Page({
  data: {
    cuIconright:"cuIcon-right",
    display:"none",
    cuIconrightmao:"cuIcon-right",
    displaymao:"none",
    cuIconrightjin:"cuIcon-right",
    displayjin:"none",
    cuIconrightsi:"cuIcon-right",
    displaysi:"none",
    list:[{
      title:"第一章马克思主义是关于无产阶级和人类解放的科学",
      text:"11题",
      index:"1"
    },{
      title:"第二章世界的物质性及发展规律",
      text:"16题",
      index:"2"
    },{
      title:"第三章实践与认识及其发展规律",
      text:"15题",
      index:"3"
    },{
      title:"第四章人类社会及其发展规律",
      text:"12题",
      index:"4"
    },{
      title:"第五章资本主义的本质及规律",
      text:"20题",
      index:"5"
    },{
      title:"第六章资本主义的发展及其趋势",
      text:"9题",
      index:"6"
    },{
      title:"第七章社会主义的发展及其规律",
      text:"10题",
      index:"7"
    },{
      title:"第八章共产主义崇高理想及其最终实现",
      text:"5题",
      index:"8"
    },],
    listmao:[{
      title:"第一章毛泽东思想及其历史地位",
      text:"11题"
    },{
      title:"第二章新民主主义革命理论",
      text:"17题"
    },{
      title:"第三章社会主义改造理论",
      text:"11题"
    },{
      title:"第四章社会主义建设道路初步探索",
      text:"9题"
    },{
      title:"第五章邓小平理论",
      text:"13题"
    },{
      title:"第六章“三个代表”重要思想",
      text:"7题"
    },{
      title:"第七章科学发展观",
      text:"9题"
    },{
      title:"第八章习近平新时代中国特色社会主义思想及其历史地位",
      text:"9题"
    },{
      title:"第九章坚持和发展中国特色社会主义的总任务",
      text:"8题"
    },{
      title:"第十章“五位一体”总体布局",
      text:"17题"
    },{
      title:"第十一章“四个全面”战略布局",
      text:"13题"
    },{
      title:"第十二章 全面推进国防和军队现代化",
      text:"11题"
    },{
      title:"第十三章中国特色大国外交",
      text:"10题"
    },{
      title:"第十四章 坚持和加强党的领导",
      text:"10题"
    },],
    listjin:[{
      title:"第一章反对外国侵略的斗争",
      text:"8题"
    },{
      title:"第二章对国家出路的早期探索",
      text:"8题"
    },{
      title:"第三章辛亥革命与君主专制制度的终结",
      text:"7题"
    },{
      title:"第四章开天辟地的大事变",
      text:"6题"
    },{
      title:"第五章中国革命的新道路",
      text:"7题"
    },{
      title:"第六章中华民族的抗日战争",
      text:"7题"
    },{
      title:"第七章为新中国而奋斗",
      text:"6题"
    },{
      title:"第八章社会主义基本制度在中国的确立",
      text:"7题"
    },{
      title:"第九章社会主义建设在探索中曲折发展",
      text:"6题"
    },{
      title:"第十章中国特色社会主义的开创与接续发展",
      text:"6题"
    },{
      title:"第十一章中国特色社会主义进入新时代",
      text:"6题"
    },],
    listsi:[{
      title:"绪论",
      text:"5题"
    },{
      title:"第一章人生的青春之问",
      text:"6题"
    },{
      title:"第二章坚定理想信念",
      text:"6题"
    },{
      title:"第三章弘扬中国精神",
      text:"6题"
    },{
      title:"第四章践行社会主义核心价值观",
      text:"6题"
    },{
      title:"第五章明大德守公德严私德",
      text:"6题"
    },]

  },
  
  cuIconright1:function(){
    if(a==1){
      this.setData({
      cuIconright:"cuIcon-unfold",
      display:"block"
    })
    a=2
    }else{
      this.setData({
      cuIconright:"cuIcon-right",
      display:"none"
      }),
      a=1

    }
  
  },
  cuIconrightmao:function(){
    if(amao==1){
      this.setData({
      cuIconrightmao:"cuIcon-unfold",
      displaymao:"block"
    })
    amao=2
    }else{
      this.setData({
      cuIconrightmao:"cuIcon-right",
      displaymao:"none"
      }),
      amao=1

    }
  
  },
  cuIconrightjin:function(){
    if(ajin==1){
      this.setData({
      cuIconrightjin:"cuIcon-unfold",
      displayjin:"block"
    })
    ajin=2
    }else{
      this.setData({
      cuIconrightjin:"cuIcon-right",
      displayjin:"none"
      }),
      ajin=1

    }
  
  },
  cuIconrightsi:function(){
    if(asi==1){
      this.setData({
      cuIconrightsi:"cuIcon-unfold",
      displaysi:"block"
    })
    asi=2
    }else{
      this.setData({
      cuIconrightsi:"cuIcon-right",
      displaysi:"none"
      }),
      asi=1

    }
  
  },
  mabindplay:function(e){
    app.globalData.marker = e.currentTarget.dataset.ma;
    
    wx.navigateTo({
      url: '/pages/select/select1/selecttext/index',
      
    })
  },
onshow:function(){
  q = 0;
}
 

})
