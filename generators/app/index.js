"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option("babel"); // This method adds support for a `--babel` flag

    this.argument("appname", { type: String, required: false });
  }

  // 1)
  initializing() {
    this.log(`${chalk.red("initializing!")}`);
  }

  // 2)
  async prompting() {
    this.log(`${chalk.blue("prompting!")}`);
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the primo ${chalk.red("generator-node-jwt")} generator!`
      )
    );

    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.options.appname // Defaults to optional argument
      },
      {
        type: "confirm",
        name: "cool",
        message: "Would you like to enable the Cool feature?"
      }
    ]);
    this.log("app name: ", this.answers.name);
    this.log("cool feature: ", this.answers.cool);
  }

  // 3)
  configuring() {
    this.log(`${chalk.yellow("configuring!")}`);
  }

  // // // // // // // // // // // // // // //
  // Default -- cusom methods run here
  // 4)
  method1() {
    this.log("method 1 just ran");
  }

  method2() {
    this.log("method 2 just ran");
  }
  //
  // // // // // // // // // // // // // // //

  // 5)
  writing() {
    this.log(`${chalk.green("writing!")}`);

    // Project Root files
    this.fs.copyTpl(
      this.templatePath("_package.json"),
      this.destinationPath("package.json"),
      {
        name: this.answers.name
      }
    );

    this.fs.copy(
      this.templatePath("_.babelrc"),
      this.destinationPath(".babelrc")
    );
    this.fs.copy(
      this.templatePath("_.prettierrc"),
      this.destinationPath(".prettierrc")
    );
    this.fs.copy(
      this.templatePath("_.eslintrc"),
      this.destinationPath(".eslintrc")
    );
    this.fs.copy(
      this.templatePath("_.gitignore"),
      this.destinationPath(".gitignore")
    );
    this.fs.copy(
      this.templatePath("_README.md"),
      this.destinationPath("README.md")
    );
    this.fs.copy(this.templatePath("_.env"), this.destinationPath(".env"));

    // Next JS Config
    this.fs.copy(
      this.templatePath("_next.config.js"),
      this.destinationPath("next.config.js")
    );

    // Store.js
    this.fs.copy(
      this.templatePath("_store.js"),
      this.destinationPath("store.js")
    );

    // Copy entire project within /src directory
    this.fs.copy(this.templatePath("src"), this.destinationPath("src"));
  }

  // 6)
  conflicts() {
    this.log(`${chalk.red("Checking for confilcts!")}`);
  }

  // 7)
  install() {
    this.log(`${chalk.green("install!")}`);
    // Install via package.json file --> this.installDependencies();

    // Dependencies
    this.npmInstall(
      [
        "@zeit/next-css",
        "better-react-spinkit",
        "color",
        "dotenv",
        "dotenv-webpack",
        "es6-promise",
        "fetch-everywhere",
        "formik",
        "jwt-decode",
        "lodash.capitalize",
        "lodash.keyby",
        "lodash.map",
        "next",
        "next-images",
        "path",
        "prop-types",
        "react",
        "react-dom",
        "react-redux",
        "redux",
        "redux-logger",
        "redux-thunk",
        "styled-components",
        "universal-cookie",
        "uuid"
      ],
      {
        "save-dev": false
      }
    );

    // Dev Dependencies
    this.npmInstall(
      [
        "babel-eslint",
        "babel-plugin-module-resolver",
        "eslint",
        "eslint-config-airbnb",
        "eslint-plugin-import",
        "eslint-plugin-jsx-a11y",
        "eslint-plugin-react"
      ],
      {
        "save-dev": true
      }
    );
  }

  // 8)
  end() {
    this.log(yosay(`${chalk.green("ALL DONE SON!")}`));
    this.log(
      `${chalk.green(`Starting ${this.answers.name}..`)}${chalk.blue(
        ".."
      )}${chalk.red("..")}${chalk.yellow("..")}${chalk.green("..")}`
    );
    this.spawnCommand("npm", ["run", "dev"]);
  }
};
