const fs = require('fs')

class RemoveConsolePlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    console.log('进入去除console的自定义plugin')
    compiler.hooks.done.tap('removeConsole', stats => {
      console.log('我将要移除所有的 console')
      this.removeAllLogs(stats)
    })

    compiler.hooks.compilation.tap('HelloCompilationPlugin', compilation => {
      // 如何获取Webpack打包出的文件Hash
      // https://www.jianshu.com/p/686849ad4ba4
      compiler.hooks.afterEmit.tap('getOutPutFileName', compilation => {
        try {
          let stats = compilation.getStats().toJson()
          this.filename = stats.assetsByChunkName.main
        } catch (e) {
          throw new SyntaxError('获取bundle js 文件失败')
        }
      })
    })
  }

  removeAllLogs(stats) {
    const { path } = stats.compilation.options.output
    let filePath = path + '/' + this.filename
    fs.readFile(filePath, 'utf8', (err, data) => {
      const rgx = /console.log\(['|"](.*?)['|"]\)/
      const newData = data.replace(rgx, '')
      if (err) console.log(err)
      fs.writeFile(filePath, newData, function (err) {
        if (err) {
          return console.log(err)
        }
        console.log('Logs Removed')
      })
    })
  }
}

module.exports = {
  RemoveConsolePlugin
}
