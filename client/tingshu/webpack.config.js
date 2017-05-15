const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const src = path.join(__dirname, "/src/");
const node_modules = path.join(__dirname, "/node_modules/");

const projectName = path.basename(__dirname); //获取项目名称

module.exports = {
    entry: {
        router: path.join(src, "static/router.js"),
        vue: path.join(node_modules, "vue/dist/vue.min.js"),
        "vue-router": path.join(node_modules, "vue-router/dist/vue-router.min.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "static/"+projectName+"/js/[name].js?v=[hash]",
        libraryTarget: "amd"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist/static/js"),
        compress: true,
        port: 9000
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from:"./src/static/require.js",
                to:path.resolve(__dirname, "dist/static/"+projectName+"/js")
            }
        ]),
        new HtmlWebpackPlugin({
            filename:"views/"+projectName+"/index.html",
            template:path.join(src, "views/index.html"),
            chunks:[]
        })
    ],
    module: {
        rules: [

        ]
    }
}