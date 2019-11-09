// components/my-props/my-props.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:"String",
      value:'默认标题',
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal);
      }
    }
  },
  externalClasses:['contentclass']
})
