// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [],
    load: true,

  },
  onLoad() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
   var  listma = [{}];
    var listmao = [{}];
   var listjin = [{}];
    var listsi = [{}];
    for (let i = 1; i < 9; i++) {
      listma[i-1] = {};
      listma[i-1].name = "马-" + i;
      listma[i-1].id = i-1;
      listma[i-1].nameid = "ma";
      listma[i-1].nubem = [{in:"red"},{in:"green"},{},{},{},{},];
      
    }
    for (let i = 1; i < 15; i++) {
      listmao[i-1] = {};
      listmao[i-1].name ="毛-" + i;
      listmao[i-1].id = i-1;
      listmao[i-1].nameid = "mao";
      listmao[i-1].nubem = 5;
    }
    for (let i = 1; i < 12; i++) {
      listjin[i-1] = {};
      listjin[i-1].name ="近-" + i;
      listjin[i-1].id = i-1;
      listjin[i-1].nameid = "shi";
      listjin[i-1].nubem = 2;
    }
    for (let i = 1; i < 7; i++) {
      listsi[i-1] = {};
      listsi[i-1].name ="思-" + i;
      listsi[i-1].id = i-1;
      listsi[i-1].nameid = "si";
      listsi[i-1].nubem = 2;
    }
    listjin=listjin.concat(listsi)
    listmao=listmao.concat(listjin)
    listma=listma.concat(listmao)

 /*    for(var i=0;i<10;i++){
      listma[0].nubem[i].nameid = "ma" 
      listma[0].nubem[i].id = i
    } */
    listma[0].nubem = [{nameid:"ma0",id:"0"},{nameid:"ma0",id:"1"},{nameid:"ma0",id:"2"},{nameid:"ma0",id:"3"},{nameid:"ma0",id:"4"},{nameid:"ma0",id:"5"},{nameid:"ma0",id:"6"},{nameid:"ma0",id:"7"},{nameid:"ma0",id:"8"},{nameid:"ma0",id:"9"},{nameid:"ma0",id:"10"}]
    listma[1].nubem = [{nameid:"ma1",id:"0"},{nameid:"ma1",id:"1"},{nameid:"ma1",id:"2"},{nameid:"ma1",id:"3"},{nameid:"ma1",id:"4"},{nameid:"ma1",id:"5"},{nameid:"ma1",id:"6"},{nameid:"ma1",id:"7"},{nameid:"ma1",id:"8"},{nameid:"ma1",id:"9"},{nameid:"ma1",id:"10"},{nameid:"ma1",id:"11"},{nameid:"ma1",id:"12"},{nameid:"ma1",id:"13"},{nameid:"ma1",id:"14"},{nameid:"ma1",id:"15"},]
    listma[2].nubem = [{nameid:"ma2",id:"0"},{nameid:"ma2",id:"1"},{nameid:"ma2",id:"2"},{nameid:"ma2",id:"3"},{nameid:"ma2",id:"4"},{nameid:"ma2",id:"5"},{nameid:"ma2",id:"6"},{nameid:"ma2",id:"7"},{nameid:"ma2",id:"8"},{nameid:"ma2",id:"9"},{nameid:"ma2",id:"10"},{nameid:"ma2",id:"11"},{nameid:"ma2",id:"12"},{nameid:"ma2",id:"13"},{nameid:"ma2",id:"14"},{nameid:"ma2",id:"15"},{nameid:"ma2",id:"16"},{nameid:"ma2",id:"17"},{nameid:"ma2",id:"18"},]
    listma[3].nubem = [{nameid:"ma3",id:"0"},{nameid:"ma3",id:"1"},{nameid:"ma3",id:"2"},{nameid:"ma3",id:"3"},{nameid:"ma3",id:"4"},{nameid:"ma3",id:"5"},{nameid:"ma3",id:"6"},{nameid:"ma3",id:"7"},{nameid:"ma3",id:"8"},{nameid:"ma3",id:"9"},{nameid:"ma3",id:"10"},{nameid:"ma3",id:"11"},{nameid:"ma3",id:"12"},{nameid:"ma3",id:"13"},{nameid:"ma3",id:"14"},]
    listma[4].nubem = [{nameid:"ma4",id:"0"},{nameid:"ma4",id:"1"},{nameid:"ma4",id:"2"},{nameid:"ma4",id:"3"},{nameid:"ma4",id:"4"},{nameid:"ma4",id:"5"},{nameid:"ma4",id:"6"},{nameid:"ma4",id:"7"},{nameid:"ma4",id:"8"},{nameid:"ma4",id:"9"},{nameid:"ma4",id:"10"},{nameid:"ma4",id:"11"},]
    listma[5].nubem = [{nameid:"ma5",id:"0"},{nameid:"ma5",id:"1"},{nameid:"ma5",id:"2"},{nameid:"ma5",id:"3"},{nameid:"ma5",id:"4"},{nameid:"ma5",id:"5"},{nameid:"ma5",id:"6"},{nameid:"ma5",id:"7"},{nameid:"ma5",id:"8"},{nameid:"ma5",id:"9"},]
    listma[6].nubem = [{nameid:"ma6",id:"0"},{nameid:"ma6",id:"1"},{nameid:"ma6",id:"2"},{nameid:"ma6",id:"3"},{nameid:"ma6",id:"4"},{nameid:"ma6",id:"5"},{nameid:"ma6",id:"6"},{nameid:"ma6",id:"7"},{nameid:"ma6",id:"8"},]
    listma[7].nubem =  [{nameid:"ma7",id:"0"},{nameid:"ma7",id:"1"},{nameid:"ma7",id:"2"},{nameid:"ma7",id:"3"},{nameid:"ma7",id:"4"},]
    listma[8].nubem = [{nameid:"mao0",id:"0"},{nameid:"mao0",id:"1"},{nameid:"mao0",id:"2"},{nameid:"mao0",id:"3"},{nameid:"mao0",id:"4"},{nameid:"mao0",id:"5"},{nameid:"mao0",id:"6"},{nameid:"mao0",id:"7"},{nameid:"mao0",id:"8"},{nameid:"mao0",id:"9"},{nameid:"mao0",id:"10"},]
    listma[9].nubem = [{nameid:"mao1",id:"0"},{nameid:"mao1",id:"1"},{nameid:"mao1",id:"2"},{nameid:"mao1",id:"3"},{nameid:"mao1",id:"4"},{nameid:"mao1",id:"5"},{nameid:"mao1",id:"6"},{nameid:"mao1",id:"7"},{nameid:"mao1",id:"8"},{nameid:"mao1",id:"9"},{nameid:"mao1",id:"10"},{nameid:"mao1",id:"11"},{nameid:"mao1",id:"12"},{nameid:"mao1",id:"13"},{nameid:"mao1",id:"14"},{nameid:"mao1",id:"15"},]
    listma[10].nubem =  [{nameid:"mao2",id:"0"},{nameid:"mao2",id:"1"},{nameid:"mao2",id:"2"},{nameid:"mao2",id:"3"},{nameid:"mao2",id:"4"},{nameid:"mao2",id:"5"},{nameid:"mao2",id:"6"},{nameid:"mao2",id:"7"},{nameid:"mao2",id:"8"},{nameid:"mao2",id:"9"},{nameid:"mao2",id:"10"},]
    listma[11].nubem =  [{nameid:"mao3",id:"1"},{nameid:"mao3",id:"2"},{nameid:"mao3",id:"2"},{nameid:"mao3",id:"3"},{nameid:"mao3",id:"4"},{nameid:"mao3",id:"5"},{nameid:"mao3",id:"6"},{nameid:"mao3",id:"7"},{nameid:"mao3",id:"8"},]
    listma[12].nubem = [{nameid:"mao4",id:"0"},{nameid:"mao4",id:"1"},{nameid:"mao4",id:"2"},{nameid:"mao4",id:"3"},{nameid:"mao4",id:"4"},{nameid:"mao4",id:"5"},{nameid:"mao4",id:"6"},{nameid:"mao4",id:"7"},{nameid:"mao4",id:"8"},{nameid:"mao4",id:"9"},{nameid:"mao4",id:"10"},{nameid:"mao4",id:"11"},{nameid:"mao4",id:"12"},]
    listma[13].nubem = [{nameid:"mao5",id:"0"},{nameid:"mao5",id:"1"},{nameid:"mao5",id:"2"},{nameid:"mao5",id:"3"},{nameid:"mao5",id:"4"},{nameid:"mao5",id:"5"},{nameid:"mao5",id:"6"},{nameid:"mao5",id:"7"},{nameid:"mao5",id:"8"},]
    listma[14].nubem = [{nameid:"mao6",id:"0"},{nameid:"mao6",id:"1"},{nameid:"mao6",id:"2"},{nameid:"mao6",id:"3"},{nameid:"mao6",id:"4"},{nameid:"mao6",id:"5"},{nameid:"mao6",id:"6"},{nameid:"mao6",id:"7"},{nameid:"mao6",id:"8"},]
    listma[15].nubem =  [{nameid:"mao7",id:"0"},{nameid:"mao7",id:"1"},{nameid:"mao7",id:"2"},{nameid:"mao7",id:"3"},{nameid:"mao7",id:"4"},{nameid:"mao7",id:"5"},{nameid:"mao7",id:"6"},,]
    listma[16].nubem = [{nameid:"mao8",id:"0"},{nameid:"mao8",id:"1"},{nameid:"mao8",id:"2"},{nameid:"mao8",id:"3"},{nameid:"mao8",id:"4"},{nameid:"mao8",id:"5"},{nameid:"mao8",id:"6"},{nameid:"mao8",id:"7"},{nameid:"mao8",id:"8"},{nameid:"mao8",id:"9"},{nameid:"mao8",id:"10"},{nameid:"mao8",id:"11"},{nameid:"mao8",id:"12"},{nameid:"mao8",id:"13"},{nameid:"mao8",id:"14"},{nameid:"mao8",id:"15"},{nameid:"mao8",id:"16"},]
    listma[17].nubem =  [{nameid:"mao9",id:"0"},{nameid:"mao9",id:"1"},{nameid:"mao9",id:"2"},{nameid:"mao9",id:"3"},{nameid:"mao9",id:"4"},{nameid:"mao9",id:"5"},{nameid:"mao9",id:"6"},{nameid:"mao9",id:"7"},{nameid:"mao9",id:"8"},{nameid:"mao9",id:"9"},{nameid:"mao9",id:"10"},{nameid:"mao9",id:"11"},{nameid:"mao9",id:"12"},]
    listma[18].nubem = [{nameid:"mao10",id:"0"},{nameid:"mao10",id:"1"},{nameid:"mao10",id:"2"},{nameid:"mao10",id:"3"},{nameid:"mao10",id:"4"},{nameid:"mao10",id:"5"},{nameid:"mao10",id:"6"},{nameid:"mao10",id:"7"},]
    listma[19].nubem = [{nameid:"mao11",id:"0"},{nameid:"mao11",id:"1"},{nameid:"mao11",id:"2"},{nameid:"mao11",id:"3"},{nameid:"mao11",id:"4"},{nameid:"mao11",id:"5"},{nameid:"mao11",id:"6"},{nameid:"mao11",id:"7"},{nameid:"mao11",id:"8"},{nameid:"mao11",id:"9"},{nameid:"mao11",id:"10"},]
    listma[20].nubem = [{nameid:"mao12",id:"0"},{nameid:"mao12",id:"1"},{nameid:"mao12",id:"2"},{nameid:"mao12",id:"3"},{nameid:"mao12",id:"4"},{nameid:"mao12",id:"5"},{nameid:"mao12",id:"6"},{nameid:"mao12",id:"7"},{nameid:"mao12",id:"8"},{nameid:"mao12",id:"9"},]
    listma[21].nubem =  [{nameid:"mao13",id:"0"},{nameid:"mao13",id:"1"},{nameid:"mao13",id:"2"},{nameid:"mao13",id:"3"},{nameid:"mao13",id:"4"},{nameid:"mao13",id:"5"},{nameid:"mao13",id:"6"},{nameid:"mao13",id:"7"},{nameid:"mao13",id:"8"},{nameid:"mao13",id:"9"},]
    listma[22].nubem = [{nameid:"shi0",id:"0"},{nameid:"shi0",id:"1"},{nameid:"shi0",id:"2"},{nameid:"shi0",id:"3"},{nameid:"shi0",id:"4"},{nameid:"shi0",id:"5"},{nameid:"shi0",id:"6"},{nameid:"shi0",id:"7"},]
    listma[23].nubem =  [{nameid:"shi1",id:"0"},{nameid:"shi1",id:"1"},{nameid:"shi1",id:"2"},{nameid:"shi1",id:"3"},{nameid:"shi1",id:"4"},{nameid:"shi1",id:"5"},]
    listma[24].nubem = [{nameid:"shi2",id:"0"},{nameid:"shi2",id:"1"},{nameid:"shi2",id:"2"},{nameid:"shi2",id:"3"},{nameid:"shi2",id:"4"},{nameid:"shi2",id:"5"},{nameid:"shi2",id:"6"},]
    listma[25].nubem = [{nameid:"shi3",id:"0"},{nameid:"shi3",id:"1"},{nameid:"shi3",id:"2"},{nameid:"shi3",id:"3"},{nameid:"shi3",id:"4"},{nameid:"shi3",id:"5"},{nameid:"shi3",id:"6"},{nameid:"shi3",id:"7"},]
    listma[26].nubem =  [{nameid:"shi4",id:"0"},{nameid:"shi4",id:"1"},{nameid:"shi4",id:"2"},{nameid:"shi4",id:"3"},{nameid:"shi4",id:"4"},{nameid:"shi4",id:"5"},{nameid:"shi4",id:"6"},]
    listma[27].nubem =[{nameid:"shi5",id:"0"},{nameid:"shi5",id:"1"},{nameid:"shi5",id:"2"},{nameid:"shi5",id:"3"},{nameid:"shi5",id:"4"},{nameid:"shi5",id:"5"},{nameid:"shi5",id:"6"},]
    listma[28].nubem =  [{nameid:"shi6",id:"0"},{nameid:"shi6",id:"1"},{nameid:"shi6",id:"2"},{nameid:"shi6",id:"3"},{nameid:"shi6",id:"4"},{nameid:"shi6",id:"5"},]
    listma[29].nubem =[{nameid:"shi7",id:"0"},{nameid:"shi7",id:"1"},{nameid:"shi7",id:"2"},{nameid:"shi7",id:"3"},{nameid:"shi7",id:"4"},{nameid:"shi7",id:"5"},]
    listma[30].nubem = [{nameid:"shi8",id:"0"},{nameid:"shi8",id:"1"},{nameid:"shi8",id:"2"},{nameid:"shi8",id:"3"},{nameid:"shi8",id:"4"},{nameid:"shi8",id:"5"},{nameid:"shi8",id:"6"},]
    listma[31].nubem =  [{nameid:"shi9",id:"0"},{nameid:"shi9",id:"1"},{nameid:"shi9",id:"2"},{nameid:"shi9",id:"3"},{nameid:"shi9",id:"4"},{nameid:"shi9",id:"5"},]
    listma[32].nubem = [{nameid:"shi10",id:"0"},{nameid:"shi10",id:"1"},{nameid:"shi10",id:"2"},{nameid:"shi10",id:"3"},{nameid:"shi10",id:"4"},{nameid:"shi10",id:"5"},]
    listma[33].nubem = [{nameid:"si0",id:"0"},{nameid:"si0",id:"1"},{nameid:"si0",id:"2"},{nameid:"si0",id:"3"},{nameid:"si0",id:"4"},]
    listma[34].nubem = [{nameid:"si1",id:"0"},{nameid:"si1",id:"1"},{nameid:"si1",id:"2"},{nameid:"si1",id:"3"},{nameid:"si1",id:"4"},{nameid:"si1",id:"5"},]
    listma[35].nubem = [{nameid:"si2",id:"0"},{nameid:"si2",id:"1"},{nameid:"si2",id:"2"},{nameid:"si2",id:"3"},{nameid:"si2",id:"4"},{nameid:"si2",id:"5"},]
    listma[36].nubem =  [{nameid:"si3",id:"0"},{nameid:"si3",id:"1"},{nameid:"si3",id:"2"},{nameid:"si3",id:"3"},{nameid:"si3",id:"4"},{nameid:"si3",id:"5"},]
    listma[37].nubem =  [{nameid:"si4",id:"0"},{nameid:"si4",id:"1"},{nameid:"si4",id:"2"},{nameid:"si4",id:"3"},{nameid:"si4",id:"4"},{nameid:"si4",id:"5"},]
    listma[38].nubem = [{nameid:"si5",id:"0"},{nameid:"si5",id:"1"},{nameid:"si5",id:"2"},{nameid:"si5",id:"3"},{nameid:"si5",id:"4"},{nameid:"si5",id:"5"},]
   
    

       this.setData({
          list: listma,
          listCur: listma[0]
        })
        console.log(listma)
       
          
  },

  mabindplay:function(e){
    app.globalData.marker = e.currentTarget.dataset.ma;
    app.globalData.qq = e.currentTarget.dataset.qq;
    
    wx.navigateTo({
      url: '/pages/select/select1/selecttexta/index',
      
    })
  },
  onReady() {
    wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;     
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  }
})