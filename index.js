#!/usr/bin/env node

const program = require('commander');

const fs    = require("fs");
const extra = require('fs-extra');
const path  = require("path");

var service = "";
var currentPath = path.resolve("./");

function ucfirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function readAppConfig(projectNameAndPath, nameProject) {
  var servicePath = projectNameAndPath + '/Config/AppConfig.ts';
  fs.readFile(projectNameAndPath + '/Config/AppConfig.ts', 'utf-8', function(err, data) {
    if (err) throw err;

    var newValue  = data.replace("NameProject", ucfirst(nameProject));
    var newValue2 = newValue.replace("baseUrlProject", nameProject.toLowerCase());

    fs.writeFile(servicePath, newValue2, 'utf-8', function (err) {
      if (err) throw err;
      console.log('Create config complete');
    });
  });
}

function readNormal(projectNameAndPath, nameProject, path, other) {
  var servicePath = projectNameAndPath + path;
  fs.readFile(projectNameAndPath + path, 'utf-8', function(err, data) {
    if (err) throw err;

    var newValue = data.replace("NameProject", ucfirst(nameProject));

    fs.writeFile(servicePath, newValue, 'utf-8', function (err) {
      if (err) throw err;
      console.log('Create ' + other + ' complete!');
    });
  });
}

program
  .version('0.0.1')
  .description('Northwind dev tool');

program
  .command('project <name>')
  .alias('p')
  .description('Get contact')
  .action(function (name) {
    if (name != "" || name != "undefined") {
      var newProjectPath = currentPath + "/" + name;
      extra.copy(__dirname + '/project', currentPath + "/" + name , function(err) {
        if (err) return console.error(err);
        readAppConfig(newProjectPath, name);
        readNormal(newProjectPath, name, "/Config/Services.ts", "services");
        readNormal(newProjectPath, name, "/Controllers/IndexController.ts", "controllers");
        readNormal(newProjectPath, name, "/Models/Sample.ts", "models");
        readNormal(newProjectPath, name, "/Views/ViewHtmlSample.ts", "views");
        console.log("Create project \"" + name + "\" was successfully created!");
      });
    } else {
      console.info("Name project is required!");
    }
  });

program.parse(process.argv);