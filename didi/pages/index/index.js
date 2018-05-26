const app = getApp()

Page({
    data: {
        navData:[
            {id:0,name:'快车',url:'../../assets/images/cart1.png'},
            {id:1,name:'专车',url:'../../assets/images/cart2.png'},
            {id:2,name:'出租车',url:'../../assets/images/cart3.png'},
            {id:3,name:'顺风车',url:'../../assets/images/cart4.png'},
            {id:4,name:'公交',url:'../../assets/images/cart5.png'},
            {id:4,name:'代驾',url:'../../assets/images/cart6.png'},
            {id:4,name:'自驾租车',url:'../../assets/images/cart7.png'},
            {id:4,name:'二手车',url:'../../assets/images/cart8.png'},
            ],
        currentTab: 0,
        navScrollLeft: 0,
        imgUrls:[
            '../../assets/images/swiper-2.png',
            '../../assets/images/swiper-1.png',
            '../../assets/images/swiper-3.png'
        ],
        duration: 1000,
        interval: 5000,
    },
    onLoad: function(options) {
       const id = options.id
       console.log(id)
    },
    ToWait(){
        wx.navigateTo({
           
            url:  "/pages/wait/wait",
        }),
        wx.setTopBarText({
            text: '等待应答'
          })
    },
    switchNav(event){
        let text = this.data.navData;
        var cur = event.currentTarget.dataset.current; 
        var singleNavWidth = this.data.windowWindth/6;
        this.setData({
            navScrollLeft: (cur - 1) * singleNavWidth,
            currentTab: cur
        })      
    },
    switchTab(event){
        var cur = event.detail.current;
        var singleNavWidth =55;
        this.setData({
            currentTab: cur,
            navScrollLeft: (cur - 1) * singleNavWidth
        });
    }
})