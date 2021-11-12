module.exports = {
    //  是否开启语法检查
    lintOnSave:false,
    //  单代理
    // devServer:{
    //     proxy:"http://localhost:5000",
    // }
    //  多代理
    devServer: {
        proxy: {
            //  请求前缀，放在端口号后
            '/api1': {// 匹配所有以 '/api1'开头的请求路径
                target: 'http://localhost:5000',// 代理目标的基础路径
                changeOrigin: true,  //  更改请求中的host值,默认为true
                pathRewrite: {'^/api1': ''},
                // ws:true // 用于支持websocket,默认为true
            },
            '/api2': {// 匹配所有以 '/api2'开头的请求路径
                target: 'http://localhost:5001',// 代理目标的基础路径
                changeOrigin: true,
                pathRewrite: {'^/api2': ''}
            }
        }
    }
}
