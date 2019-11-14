App({
  globalData:{
    token:''
  },
  onLaunch:function () {
    //先从缓存里取出token
    const token = wx.getStorageSync('token');
    //判断token是否有值
    if(token && token.length !== 0){
      //验证token是否过期
      this.check_token(token)
    }else{
      //没有token，进行登录操作
      this.login()
    }
  },
  check_token(token){
    wx.request({
      url: '',
      method:'post',
      header:{
        token
      },
      success:(res)=>{
        if(!res.data.errCode){
          this.globalData.token = token
        }else{
          this.login()
        }
      },
      fail:function(err){
        console.log(err);
      }
    })
  },
  login(){
    //登录操作
    wx.login({
      //code只有5分钟有效期
      success: (res) => {
        console.log(res);
        //获取code
        const code = res.code;
        //将code发送给自己的服务器->后端接口请求微信服务器获得openid，openid存取入库--->生成并返回一个token
        wx.request({
          url: '',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            //取出token
            const token = res.data.token;
            //将token保存在globalData里
            this.globalData.token = token;
            //进行本地存储
            wx.setStorageSync('token', token)
          }
        })
      }
    })
  }
})