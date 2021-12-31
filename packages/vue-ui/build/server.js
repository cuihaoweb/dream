const fastify = require("fastify")();
const webpack = require("webpack");
const devMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("./webpack.dev");


const compiler = webpack(webpackConfig);
const { publicPath } = webpackConfig.output;

const run = async () => {
    await fastify.register(require("fastify-express"));
    await fastify.use(devMiddleware(compiler, { publicPath }));
    await fastify.listen(3001);
};

run();