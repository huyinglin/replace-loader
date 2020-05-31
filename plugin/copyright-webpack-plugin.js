class CopyrightWebpackPlugin {
  constructor() {
    console.log(43434);

  }

  apply(compiler) {
    // 同步钩子
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
      console.log('43434');
    });

    // 异步钩子
    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
      debugger // yarn debug 启动调试功能
      compilation.assets['copyright.txt'] = {
        source: function() {
          return 'copyright by huyinglin';
        },
        size: function() {
          return 22;
        }
      }
      cb();
    });
  }
}

module.exports = CopyrightWebpackPlugin;
