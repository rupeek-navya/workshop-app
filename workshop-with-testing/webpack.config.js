const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                exclude: [ path.resolve( __dirname, 'node_modules' ) ],
                loader:'babel-loader',
                test:/\.js$/
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]

    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'public','index.html')
        })
    ],
    devServer:{
        port:'8080'
    },
    resolve:{
        extensions:['.js']
    }
}