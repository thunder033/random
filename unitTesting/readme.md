Unit Testing (with Node JS)
==

To follow along you'll need a few things. First you need **[Node JS](https://nodejs.org/en/)** (either the 4.3 LTS or 5.3 is fine).

When Node is installed you'll need a few node packages installed (known as modules). 
Node includes a command line tool called [Node Package Manager](https://www.npmjs.com/) (referred to as NPM).

While not necessary, if you're on Windows, you'll probably want [Cmder](http://cmder.net/) console emulator in place of the crappy Windows command line.

If Node installed correctly, you should be able run the following version commands:

```bash
> node --version
v5.3.0
> npm --version
3.3.12

```

To install a module with NPM, you use the `install` command (also aliased to `i`):

```bash
> npm install [package name]

> npm i [package name]
```

Some packages are installed globally and serve as utilities. To install a package globally, you add the `global` flag: `-g`:

```bash
> npm i -g [package name]
```

For basic unit testing you need a one of those utility packages: [`mocha`](https://www.npmjs.com/package/mocha). This package provides a framework for executing your tests and outputting results. To install `mocha` globally, you run:

```bash
npm i -g mocha
```

Other NPM packages are local to a particular project, and can be included in other project scripts.
These packages are saved in a project definition file in your project directory called `package.json`.
This file can also contain things like the project name and shortcut scripts.
This demo depends on [`chai`](http://chaijs.com/), a powerful assertion framework.
Since it is already listed as a dependency, all you need to  install them you simply need to run

```bash
> npm i
```

to install it.