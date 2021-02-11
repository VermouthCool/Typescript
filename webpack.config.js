const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports={
    mode:'development',
    entry:'./helloworld.ts',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'gege.js',
        environment:{
            arrowFunction:false
        }
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:{
                    loader:'ts-loader'
                },
                exclude:/node_mudules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'这是title可以配置',
            // template:'././'设置模板
        }),
    ],
    resolve:{//设置哪些可以作为模块使用
        extensions:['.ts','.js']
    }
}