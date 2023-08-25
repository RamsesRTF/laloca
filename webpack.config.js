const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
//esta mrda de aca, es lo mas importante de todo el proyecto, xq es donde carga todas las libreria necesarias
//asi es otra mrda para cargar librerias
//sin estas configuraciones vue no funciona ni react solo xq se que el pendejo de javier lo diria jsjsjs
//ddependiendo de las configuraciones
//Entonces siempre copian y pegan eso de abajo, bueno, todo el archivo realmente ._.XD
//-----------------------------------------------------------------------------------------------------------------------//
const vuemenuconfig = {
  entry: './src/app/vuemenu.js',
  output: {
    path: __dirname + '/src/assets/public/js',
    filename: 'vuemenupack.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,//esto si es necesario en todo
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,//esto obviamente es para vue
        loader: 'vue-loader'
      },
      {
        test: /\.css$/i,//esto es para poner codigo css dentro de vue
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',//sass es una extension de css para tener codigo mas bonito, osea una mrda
            // Requires sass-loader@^7.0.0
            options: {
              implementation: require('sass'),
              indentedSyntax: true // optional
            },
            // Requires >= sass-loader@^8.0.0
            options: {
              implementation: require('sass'),
              sassOptions: {
                indentedSyntax: true // optional
              },
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

//-----------------------------------------------------------------------------------------------------------------------//

module.exports = [vuemenuconfig]
            