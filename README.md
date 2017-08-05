# vue2-component-boilerplate
It's a boilerplate for that people who want to develop a vue2 component. This boilerplate inspired by [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack), but it's
more simple and suitable for developing a vue2 component instead a vue application or a SPA.

* Easy to use and understand, less configurations and template
* Use ```webpack-dev-server``` for hot reload development
* A minimal entry and html for preview the result on development
* Only compitable for ```vue2.0```

I saw some vue components on github which use boilerplate but there are a lots of configurations
and files is useless, so hope this minimal boilerplate can help you to have a clean and simple enviorment for developing your component.

## Getting Started
For using this boilerplate, you need to scaffold your repo by [vue-cli](https://github.com/vuejs/vue-cli)
```sh
$ vue init AllenFang/vue2-component-boilerplate YOUR_PROJECT_NAME
$ cd YOUR_PROJECT_NAME
$ npm install
$ npm run dev
```

## What's Included
* ```npm run dev``` : Development
	* Hot reload
	* ```webpack-dev-server``` as dev server

* ```npm run build``` : Build for production
	* Javascript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2)
	* Extract css(Default is false, but you can enable it)
	* The bundled js will be placed in ```dist``` folder

* ```npm run unit``` : Unit test

## Project Structure
```sh
├── build/                      # webpack configuration files
│   └── ...
├── src/
│   ├── dev.js                  # the entry point for development
│   ├── hello.vue               # just a sample vue component
│   ├── index.js                # the entry point for production
│   ├── main.vue                # the index for your components
├── test/                       # unit tests
│   ├── specs                   # testing spec
│   │   └── ...                 # testing codes
│   ├── .eslintrc               # eslint config for testing
│   ├── index.js                # the entry for karam
│   └── karma.conf.js           # karma config file
├── .babelrc                    # babel config
├── .editorconfig               # editor config
├── .eslintrc.js                # eslint config
├── .gitignore                  # git ignore config
├── index.html                  # html used on webpack-dev-server
└── package.json                # package.json
└── README.md                   # README.md
```
