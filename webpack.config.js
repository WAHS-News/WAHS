var webpack = require('webpack');

module.exports = {
  entry: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx',
  ],

  externals: {
    jquery:'jQuery'
  },

  plugins: [
    new webpack.ProvidePlugin({
      '$' : 'jquery',
      'jQuery': 'jquery'
    })
  ],

  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      About: 'app/components/About.jsx',
      Crew: 'app/components/Crew.jsx',
      VideoPage: 'app/components/VideoPage.jsx',
      NewsModal: 'app/components/NewsModal.jsx',
      Article: 'app/components/Article.jsx',
      ArticleList:'app/components/ArticleList.jsx',
      Playground: 'app/components/Playground.jsx'

    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff)$/,
        loader: 'url-loader'
      },
    ]
  }
};

