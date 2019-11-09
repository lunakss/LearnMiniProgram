// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['衣服','鞋子',"裤子"]
  },

  handleEventClick(event){
    console.log(event)
  },
  handleEventEnd(event){
    console.log(event)
  },
  handleOuter(event){
    console.log(event);
  },
  handleInner(event){
    console.log(event);
  },
  handleClick(event){
    const dataset = event.currentTarget.dataset;
    console.log(dataset.index,dataset.item);
  }
})