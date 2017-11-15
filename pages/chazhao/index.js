Page({
    data:{
        header:{
            content:'',
            class:'header',
        },
        items:[
            '黑白龙狼传',
            '天地风云录之决战时刻',
            '天地风云录之九龙变',
            '天地风云录之剑影魔踪',
            '天地风云录之魔戮血战',
            '金光御九界之墨武侠锋',
            '金光御九界之墨世佛劫',
            '金光御九界之墨邪录',
            '金光御九界之东皇战影',
            '金光御九界之魖妖记',
            '金光御九界之鬼途奇行录'
        ],
        pick:0
    },
   
    
    
    
    formSubmit(chazhao){
        console.log(chazhao.detail.value)
    },
    
    onLoad:function(options){
        
    },
    
    inputHandler(chazhao){
        this.setData({
            pick:chazhao.detail.value
        })
       console.log(chazhao.detail.value) 
    },
    
    onLoad(){
        console.log('页面加载')
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