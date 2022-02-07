class Server {
    run(options) {
        console.log(options);
    }

    
    install(progress) {
        progress
            .command('server')
            .description('server project')
            .option('-p, --port [name]', 'port', 3000)
            .option('-h, --host [age]', 'age', 'http://localhost')
            .action(options => {
                this.run(options);
            });
        return progress;
    }
}


module.exports = Server;