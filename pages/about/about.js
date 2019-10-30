// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'code',
    students:[
      {id:1,age:21,name:'A'},
      {id:2,age:22,name:'B'},
      {id:3,age:23,name:'C'}
    ],
    counter:0
  },
  add(){
    this.setData({
      counter : this.data.counter + 1
    })
  },
  subtract(){
    this.setData({
      counter : this.data.counter - 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})