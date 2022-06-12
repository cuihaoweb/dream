module.exports = {
    extends: [
        '@dream/base',
    ],
    overrides: [
        {
            files: ['*.ts'],
            extends: ['@dream/ts']
        }
    ]
};
