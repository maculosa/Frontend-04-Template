module.exports = {
    entry: './main.js',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [["@babel/plugin-transform-react-jsx", { pragma: "createElement"}]], // pargma 将react.createElement 改为 createElement
                    }
                }
            }
        ]
    },
    mode: "development"
}