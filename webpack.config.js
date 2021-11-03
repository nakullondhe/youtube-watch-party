// const path = require("path");
// const fs = require("fs");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// // App directory
// const appDirectory = fs.realpathSync(process.cwd());

// // Gets absolute path of file within app directory
// const resolveAppPath = (relativePath) =>
//   path.resolve(appDirectory, relativePath);

// // Host
// const host = process.env.HOST || "localhost";

// // Required for babel-preset-react-app
// process.env.NODE_ENV = "development";

// module.exports = {
//   // Environment mode
//   mode: "development",
//   // Entry point of app
//   entry: resolveAppPath("src"),

//   output: {
//     filename: "static/js/bundle.js",
//     path: path.resolve(__dirname, "build"),
//     publicPath: "/",
//   },
//   // Dev Server Configurations
//   devServer: {
//     historyApiFallback: true,
//     // Enable compression
//     compress: true,

//     // Enable hot reloading
//     hot: true,
//     host,
//     port: 3000,

//     // Public path is root of content base
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         include: resolveAppPath('src'),
//         loader: 'babel-loader',
//         options: {
//           presets: [
//             require.resolve('babel-preset-react-app'),
//           ]
//         }
//       },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//           },
//         ],
//       }
//     ]
//   },
//   plugins: [
//     // Re-generate index.html with injected script tag.
//     // The injected script tag contains a src value of the
//     // filename output defined above.
//     new HtmlWebpackPlugin({
//       inject: true,
//       template: resolveAppPath("public/index.html"),
//     }),
//   ],
// };
