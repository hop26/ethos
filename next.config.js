const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
// module.exports = withCSS({
//   // cssModules: true
// })



module.exports = withCSS(withSass({
   webpack (config, options) {
       config.module.rules.push({
           test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
           use: {
               loader: 'url-loader',
               options: {
                   limit: 100000
               }
           }
       });

       return config;
   }
}));
