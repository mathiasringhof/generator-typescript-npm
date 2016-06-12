# generator-typescript-npm
> Very basic Yeoman generator for TypeScript modules, using only npm scripts instead of Grunt/Gulp, based on https://github.com/mathiasringhof/typescript-node-seed

## Features

* TypeScript 1.8, installed locally
* mocha/chai for testing, ts-node for on-the-fly test compilation, nodemon for proper watching / TDD workflow
* no build tool dependencies, only npm scripts
* proper .npmignore so published module only has the necessary sources

## Starting a new project

* npm install -g generator-typescript-npm
* create a project folder & cd into it
* yo typescript-npm

## WARNINGs

* I'm just dabbling around with TypeScript and Yeoman and might be missing obvious stuff
* remember to set **typings** in package.json if you want to properly consume your module from other TypeScript projects
* yo typescript-npm <folder> doesn't work right now

## What's working

* **npm run build** - run tsc
* **npm run build:watch** - run tsc in watch-mode
* **npm run clean** - delete *build* directory
* **npm run lint** - runs tslint
* **npm run node** - run ts-node to get a REPL or run a script, e.g. a spike: npm run node src/spikes/consolespike.ts
* **npm test** - run mocha on all *.ts files in *test/*
* **npm run test:watch** - re-run mocha on all *.ts files in *test/* everytime a file changes 
* **npm run typings** - run locally installed typings. Note you need to use -- before using options, e.g. *npm run typings install dt~commander -- --global --save*

## TODO

Probably some stuff I'm not seeing right now.

## License

Apache-2.0 © [Mathias Ringhof]()