Page({


    
    start:function(){
         wx.navigateTo({
               url: 'audio'
        })
    },
      onLoad(){
       console.log('页面')
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
    
    
})

