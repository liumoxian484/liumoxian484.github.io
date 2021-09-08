module.exports = {
    publicPath: '/class_admin',
    outputDir: 'dist/class_admin',
    devServer: {
        proxy: {
            '/class_api': {
                target: 'http://172.17.190.223:8081', // 接口的域名
                //secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
                pathRewrite: {
                    '^/class_api': ''
                }
            }
        },
        disableHostCheck: true
    }
};
