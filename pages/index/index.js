//index.js
//获取应用实例
const app=getApp()
Page({
    data:{
       greeting:''
    },
    greet(greeting){
        return greeting[Math.floor(Math.random()*greeting.length)]
    },
     juese :function(){
         wx.navigateTo({
               url: 'juese'
        })
    },
    onLoad(){
        console.log('页面加载')
        this.setData({
            greeting:this.greet(app.globalData.greeting)
        })
    },
    onShow(){
        console.log('页面显示')
    },
    onReady(){
        console.log('页面首次渲染完成')
    },
    onHide(){
        console.log('页面隐藏')
    },
    onUnload(){
        console.log('页面卸载')
    },
    onPullDownRefresh(){
        console.log('页面下拉刷新')
    },
    onReachBottom(){
        console.log('页面到底了')
    },
    onPageScroll(calculations){
        console.log(calculations)
    }
   
})
