// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0
  },
  incrementClick(event){
    console.log(event);
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleIncrementCpn(){
    const my_sel = this.selectComponent('#sel');
    console.log(my_sel);
    my_sel.changeNum(10)
  }
})