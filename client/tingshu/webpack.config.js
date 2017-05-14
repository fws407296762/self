const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const src = path.join(__dirname, "/src/");
const node_modules = path.join(__dirname, "/node_modules/");


module.exports = {
    entry: {
        router: path.join(src, "static/router.js"),
        vue: path.join(node_modules, "vue/dist/vue.min.js"),
        "vue-router": path.join(node_modules, "vue-router/dist/vue-router.min.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "static/js/[name].js?v=[hash]",
        publicPath:"lib",
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
                to:path.resolve(__dirname, "dist/static/js")
            }
        ]),
        new HtmlWebpackPlugin({
            filename:"views/index.html",
            template:path.join(src, "template/index.html"),
            chunks:[]
        })
    ],
    module: {
        rules: [

        ]
    }
}