const fastify = require("fastify")();
const webpack = require("webpack");
const devMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("./webpack.dev");
const { createFsFromVolume, Volume } = require('memfs');


const fs = createFsFromVolume(new Volume());


const compiler = webpack(webpackConfig);
compiler.outputFileSystem = fs;
console.log(compiler);

compiler.run((err, stats) => { // [Stats Object](#stats-object)
    // ...
    // console.log(stats.entrypoints)
    const content = fs.readFileSync(compiler.outputPath+'/index.html');
    console.log(content.toString());
    compiler.close((closeErr) => {
        // ...
    });
});
// const { publicPath } = webpackConfig.output;

// const run = async () => {
//     await fastify.register(require("fastify-express"));
//     await fastify.use(devMiddleware(compiler, { publicPath }));
//     await fastify.listen(3001);
// };

// run();