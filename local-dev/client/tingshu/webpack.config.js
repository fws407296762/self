const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const path = require("path");
const src = path.join(__dirname, "/src/");
const node_modules = path.join(__dirname, "/node_modules/");
const staticDomain = "http://127.0.0.1:9001/";
const staticPluginDomain = staticDomain + "static/common/";
const projectName = path.basename(__dirname); //获取项目名称

module.exports = [
    {
        entry: function () {
            return "./static/router/index.js";
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "static/" + projectName + "/js/[name].js?v=[hash]",
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: ["vue-loader"]
                }
            ]
        },
        resolve: {
            extensions: [".js", ".jsop", ".css", ".vue"],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "松鼠听书",
                filename: path.join(__dirname, "dist/views/" + projectName + "/index.html"),
                template: path.join(__dirname, "views/index.html"),
                chunks: []
            }),
            new HtmlWebpackIncludeAssetsPlugin({
                publicPath: staticPluginDomain,
                assets: ['lib/jquery.min.js', 'lib/sea.js'],
                append: false,
                hash: true
            }),
            new HtmlWebpackIncludeAssetsPlugin({
                publicPath: staticPluginDomain,
                assets: ['lib/vue.js', 'lib/vue-router.js'],
                append: true,
                hash: true
            })
        ],
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 9000
        }
    }
]