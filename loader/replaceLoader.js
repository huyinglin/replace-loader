const loaderUtils = require('loader-utils');

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  const result = source.replace('dell', options.name);
  this.callback(null, result);
  return;
}

// 异步loader
// module.exports = function(source) {
//   const options = loaderUtils.getOptions(this);
//   const callback = this.async();

//   setTimeout(() => {
//     const result = source.replace('dell', options.name);
//     callback(null, result);
//   }, 1000);
//   return;
// }

// loader案例
// 1. 错误监控：在代码里增加 try catch，可以非侵入式的增加监控功能。
// 2. 国际化：需要语言区分的地方，比如可用 `{{title}}` 替代，然后根据环境变量替换不同的语言