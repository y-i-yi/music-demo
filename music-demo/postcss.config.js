module.exports = {
  plugins: {
    'postcss-pxtorem': {
      //把所有元素的px单位转为rem
      //rootValue为px基准值
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
// postcss为webpack的插件,转化降级css代码  
// postcss-pxtorem把px转成rem