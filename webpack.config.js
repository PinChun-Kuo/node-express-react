const webpack = require('webpack');
// 這邊使用 HtmlWebpackPlugin，將 bundle 好的 <script> 插入到 body。${__dirname} 為 ES6 語法對應到 __dirname
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/index.html`,
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    // 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
    entry: {
        'index': './public/javascripts/index.jsx'
    },
    // output 為進行完 eslint、babel loader 轉譯後的檔案位置
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].js'
    },
    module: {
        preLoaders: [{
          test: [/\.js$/, /\.jsx$/],
          exclude: /node_modules/,
          loader: 'eslint'
        }],
        // loaders 則是放欲使用的 loaders，在這邊是使用 babel-loader 將所有 .js（這邊用到正則式）相關檔案（排除了 npm 安裝的套件位置 node_modules）
        // 轉譯成瀏覽器可以閱讀的 JavaScript。preset 則是使用的 babel 轉譯規則，這邊使用 react、es2015。若是已經單獨使用 .babelrc 作為 presets 設定的話，則可以省略 query
        loaders: [{
            test: [/\.js$/, /\.jsx$/],
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.s[a|c]ss$/,
            loader: 'style!css!sass'
        }]
    },
    // 其他解決方案配置
    resolve: {
      // 設定後只需要寫 require('file') 而不用寫成 require('file.jsx')
      extensions: ['', '.js', '.jsx']
    },
    // devServer 則是 webpack-dev-server 設定
    devServer: {
        inline: true,
        port: 8080,
    },
    // plugins 放置所使用的外掛
    plugins: [HTMLWebpackPluginConfig,
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                PORT: JSON.stringify(process.env.PORT),
                HOST: JSON.stringify(process.env.HOST)
            }
        })
    ],
};
