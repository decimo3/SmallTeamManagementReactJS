const path = require('path');
module.exports = {
    /*
    // Aponta qual é o arquivo que será o ponto inicial
    // na contrução de árvore de dependências do webpack
    */
    entry: './src/index.js',
    output: {
      filename: 'index.min.js',
      path: path.join(__dirname, 'public'),
    },
    /*
    // Aqui estamos adicionando o módulo do `babel-loader`
    // Ele irá aplicar o BabelJS nos arquivos js
    // E irá ignorar os arquivos js em `node_modules`
    */
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }]
    },
    mode: 'development',
    devServer: {
      static: path.join(__dirname, 'public')
    }
};