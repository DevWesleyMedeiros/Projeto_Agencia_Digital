const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: { // Módulo para as regras
        rules: [
            {
                test: /\.(sa|sc|c)ss$/, // Corrigindo o teste para arquivos de estilo
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, // Use MiniCssExtractPlugin para CSS também
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i, // Teste para fontes
                type: 'asset/resource', // Usando asset/resource
                generator: {
                    filename: 'fonts/[name][ext]' // Diretório de saída das fontes
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i, // Teste para arquivos de imagem
                type: 'asset/resource', // Usando asset/resource
                generator: {
                    filename: 'images/[name][ext]' // Diretório de saída das imagens
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // Local onde os arquivos estão servidos
        compress: true, // Ativa a compressão
        port: 9000, // Porta do servidor
        open: true, // Abre o navegador automaticamente
    },
};
