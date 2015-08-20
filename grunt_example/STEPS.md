Install the gruntCLI
```
npm install -g grunt-cli
```

We should create a package.json file. A package.json file is a special file that node uses to track dependencies on a project. We can begin creating a package.json file by using the command
```
npm  init
```

Next we should add grunt as one of our developer dependencies.
```
npm install --save-dev grunt
```

Grunt relies on having a Gruntfile.js so lets create one and do our work there.
```
touch Gruntfile.js
```
