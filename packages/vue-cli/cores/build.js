const { Option } = require('commander');

class Build {
    install(progress) {
        progress
            .command('build')
            .description('build project')
            .option('-n, --name [name]', 'name', 'vue')
            .option('-a, --age [age]', 'age', 111)
            .addOption(new Option('-t, --type <type>', '类型').choices(['size', 'small', 'big']))
            .action((command) => {
                console.log(command);
            });
        return progress;
    }
}


module.exports = Build;