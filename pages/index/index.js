//index.js
//获取应用实例
const app=getApp()
Page({
    data:{
        slides:null
    },
    onload(){
        this.setData({
            slides:app.globalData.slides
        })
    }
})
