const app=getApp()

Page({
    formSubmit(chazhao){
        console.log(chazhao.detail.value)
    },
    inputHandler(chazhao){
        this.setData({
            pick:chazhao.detail.value
        })
       console.log(chazhao.detail.value) 
    },
   
})