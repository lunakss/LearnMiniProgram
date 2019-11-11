export default function request(options){
  return new Promise((resolve,reject) => {
    wx.request({
      url: options.url,
      // resolve和reject本身就是函数，所以可以用作回调函数直接返回
      // success:resolve,
      // fail:reject,
      success:function(res){
        resolve(res);
      },
      fail:function(err){
        reject(err);
      }
    })
  })
  
}