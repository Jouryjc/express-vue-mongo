
// 封装成获取顶级根目录 
exports.resolve = function (dir) {
    return path.join(__dirname, '..', dir)
}