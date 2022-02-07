#!/usr/bin/env node
const { program } = require('commander');
const Build = require('./cores/build');
const Server = require('./cores/server');


new Build().install(program);
new Server().install(program);


program.parse(process.argv);