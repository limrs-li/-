// index.js
// 获取应用实例
const app = getApp()
var a = 1
var a2019 = 1
var a2018 = 1
var a2017 = 1
var a2016 = 1
var a2015 = 1
var a2014 = 1
var a2013 = 1
var a2012 = 1
var a2011 = 1
var a2010 = 1
Page({
  data:{
    display2020:"none",
    cuIconright2020:"cuIcon-right",
    display2019:"none",
    cuIconright2019:"cuIcon-right",
    display2018:"none",
    cuIconright2018:"cuIcon-right",
    display2017:"none",
    cuIconright2017:"cuIcon-right",
    display2016:"none",
    cuIconright2016:"cuIcon-right",
    display2015:"none",
    cuIconright2015:"cuIcon-right",
    display2014:"none",
    cuIconright2014:"cuIcon-right",
    display2013:"none",
    cuIconright2013:"cuIcon-right",
    display2012:"none",
    cuIconright2012:"cuIcon-right",
    display2011:"none",
    cuIconright2011:"cuIcon-right",
    display2010:"none",
    cuIconright2010:"cuIcon-right",
    list2020:[{
    title:"选择题",
    text:"33题",
    index:"1"
  },{
    title:"材料分析题",
    text:"7题",
    index:"2"
  }
],
    list2019:[{
  title:"选择题",
  text:"36题",
  index:"1"
},{
  title:"材料分析题",
  text:"12题",
  index:"2"
}
],
    list2018:[{
  title:"选择题",
  text:"36题",
  index:"1"
},{
  title:"材料分析题",
  text:"12题",
  index:"2"
}
],
list2027:[{
  title:"选择题",
  text:"33题",
  index:"1"
},{
  title:"材料分析题",
  text:"7题",
  index:"2"
}
],
  list2016:[{
title:"选择题",
text:"36题",
index:"1"
},{
title:"材料分析题",
text:"12题",
index:"2"
}
],
  list2015:[{
title:"选择题",
text:"36题",
index:"1"
},{
title:"材料分析题",
text:"12题",
index:"2"
}
],
list2014:[{
  title:"选择题",
  text:"33题",
  index:"1"
},{
  title:"材料分析题",
  text:"7题",
  index:"2"
}
],
  list2013:[{
title:"选择题",
text:"36题",
index:"1"
},{
title:"材料分析题",
text:"12题",
index:"2"
}
],
  list2012:[{
title:"选择题",
text:"36题",
index:"1"
},{
title:"材料分析题",
text:"12题",
index:"2"
}
],  
list2011:[{
  title:"选择题",
  text:"36题",
  index:"1"
  },{
  title:"材料分析题",
  text:"12题",
  index:"2"
  }
  ],
    list2010:[{
  title:"选择题",
  text:"36题",
  index:"1"
  },{
  title:"材料分析题",
  text:"12题",
  index:"2"
  }
  ],
  },
 
  mabindplay0:function(e){
    app.globalData.marker = e.currentTarget.dataset.ma;
    
    wx.navigateTo({
      url: '/pages/select/select2/select21/index',
      
    })
  },
  mabindplay1:function(e){
    app.globalData.marker = e.currentTarget.dataset.ma;
    
    wx.navigateTo({
      url: '/pages/select/select2/select22/index',
      
    })
  },
  cuIconright2020:function(){
    if(a==1){
      this.setData({
      cuIconright2020:"cuIcon-unfold",
      display2020:"block"
    })
    a=2
    }else{
      this.setData({
      cuIconright2020:"cuIcon-right",
      display2020:"none"
      }),
      a=1

    }
  
  },
  cuIconright2019:function(){
    if(a2019==1){
      this.setData({
      cuIconright2019:"cuIcon-unfold",
      display2019:"block"
    })
    a2019=2
    }else{
      this.setData({
      cuIconright2019:"cuIcon-right",
      display2019:"none"
      }),
      a2019=1

    }
  
  },
  cuIconright2018:function(){
    if(a2018==1){
      this.setData({
      cuIconright2018:"cuIcon-unfold",
      display2018:"block"
    })
    a2018=2
    }else{
      this.setData({
      cuIconright2018:"cuIcon-right",
      display2018:"none"
      }),
      a2018=1

    }
  
  },
  cuIconright2017:function(){
    if(a2017==1){
      this.setData({
      cuIconright2017:"cuIcon-unfold",
      display2017:"block"
    })
    a2017=2
    }else{
      this.setData({
      cuIconright2017:"cuIcon-right",
      display2017:"none"
      }),
      a2017=1

    }
  
  },
  cuIconright2016:function(){
    if(a2016==1){
      this.setData({
      cuIconright2016:"cuIcon-unfold",
      display2016:"block"
    })
    a2016=2
    }else{
      this.setData({
      cuIconright2016:"cuIcon-right",
      display2016:"none"
      }),
      a2016=1

    }
  
  },
  cuIconright2015:function(){
    if(a2015==1){
      this.setData({
      cuIconright2015:"cuIcon-unfold",
      display2015:"block"
    })
    a2015=2
    }else{
      this.setData({
      cuIconright2015:"cuIcon-right",
      display2015:"none"
      }),
      a2015=1

    }
  
  },
  cuIconright2014:function(){
    if(a2014==1){
      this.setData({
      cuIconright2014:"cuIcon-unfold",
      display2014:"block"
    })
    a2014=2
    }else{
      this.setData({
      cuIconright2014:"cuIcon-right",
      display2014:"none"
      }),
      a2014=1

    }
  
  },
  cuIconright2013:function(){
    if(a2013==1){
      this.setData({
      cuIconright2013:"cuIcon-unfold",
      display2013:"block"
    })
    a2013=2
    }else{
      this.setData({
      cuIconright2013:"cuIcon-right",
      display2013:"none"
      }),
      a2013=1

    }
  
  },
  cuIconright2012:function(){
    if(a2012==1){
      this.setData({
      cuIconright2012:"cuIcon-unfold",
      display2012:"block"
    })
    a2012=2
    }else{
      this.setData({
      cuIconright2012:"cuIcon-right",
      display2012:"none"
      }),
      a2012=1

    }
  
  },
  cuIconright2011:function(){
    if(a2011==1){
      this.setData({
      cuIconright2011:"cuIcon-unfold",
      display2011:"block"
    })
    a2011=2
    }else{
      this.setData({
      cuIconright2011:"cuIcon-right",
      display2011:"none"
      }),
      a2011=1

    }
  
  },
  cuIconright2010:function(){
    if(a2010==1){
      this.setData({
      cuIconright2010:"cuIcon-unfold",
      display2010:"block"
    })
    a2010=2
    }else{
      this.setData({
      cuIconright2010:"cuIcon-right",
      display2010:"none"
      }),
      a2010=1

    }
  
  },
})
