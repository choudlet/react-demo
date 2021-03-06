import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via webpack. This will take a hot second...'.blue)

webpack(webpackConfig).run((err,stats)=>{
  if(err) {
    console.log(err.bold.red);
    return 1;
  }
  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(error=> console.log(error));
    }

  if(jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow)
    jsonStats.warnings.map(warning=> console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log('Your app has been compiled in production mdoe and written to /dist! You are ready to roll'.green);

  return 0;
})
