const fs = require('fs-plus')
const path = require('path')

module.exports =
class DefaultFileIcons {
  iconClassForPath (filePath) {
    const extension = path.extname(filePath)

    return ''
  }
}
