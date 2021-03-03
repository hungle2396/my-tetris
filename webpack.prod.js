const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    // entry: {
    //     main: "./src/ts/app.ts",
    //     vendor: "./src/ts/vendor.ts"
    // },
    entry: "./src/ts/app.ts",
    devtool: "none",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.ts$/, 
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test:/\.(svg|png|jpg|gif|ogg|ttf|otf)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "img"
                    }
                }
            },
            {
                test:/\.(mp3|wav)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "audio"
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: "./src/template.html",
            filename: "index.html"
        }),
        new CleanPlugin.CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        })
    ]
};
// const path = require("path");
// const CleanPlugin = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//     mode: "production",
//     entry: {
//         main: "./src/ts/app.ts",
//         vendor: "./src/ts/vendor.ts"
//     },
//     output: {
//         filename: "[name].[contentHash].bundle.js",
//         path: path.resolve(__dirname, "./dist")
//     },
//     devtool: "none",
//     module: {
//         rules: [
//             {
//                 test: /\.ts$/, 
//                 use: "ts-loader",
//                 exclude: /node_modules/
//             },
//             {
//                 test: /\.s?css$/,
//                 use: [
//                     MiniCssExtractPlugin.loader, // 3. Extract css into files
//                     "css-loader", // 2. Turn css into commonjs
//                     "sass-loader" // 1. Turn sass into css
//                 ],
//                 exclude: /node_modules/
//             },
//             {
//                 test: /\.html$/,
//                 use: ["html-loader"]
//             },
//             {
//                 test:/\.(svg|png|jpg|gif)$/,
//                 use: {
//                     loader: "file-loader",
//                     options: {
//                         name: "[name].[ext]",
//                         outputPath: "imgs"
//                     }
//                 }
//             }
//         ]
//     },
//     resolve: {
//         extensions: [".ts", ".js"]
//     },
//     plugins: [
//         new CleanPlugin.CleanWebpackPlugin(["dist"])
//     ]
// };