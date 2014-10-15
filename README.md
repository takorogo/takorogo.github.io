Takorogo Project
================

This is the repository for the Takorogo official [website](http://takorogo.github.io/).

[![build status](https://travis-ci.org/takorogo/takorogo.github.io.svg)](http://travis-ci.org/takorogo/takorogo.github.io)
[![Coverage Status](https://img.shields.io/coveralls/takorogo/takorogo.github.io/dev.svg)](https://coveralls.io/r/takorogo/takorogo.github.io?branch=dev)
[![NPM version](https://badge.fury.io/js/takorogo.svg)](http://badge.fury.io/js/takorogo)
[![Dependency Status](https://david-dm.org/takorogo/takorogo.github.io.svg)](https://david-dm.org/takorogo/takorogo.github.io)
[![devDependency Status](https://david-dm.org/takorogo/takorogo.github.io/dev-status.svg)](https://david-dm.org/takorogo/takorogo.github.io#info=devDependencies)


Documentation
-------------

All documentation about the language is stored in project [wiki](https://github.com/takorogo/takorogo.github.io/wiki)
and automatically deployed to the site.


Repository structure
--------------------

Developer version is stored to [`dev`](https://github.com/takorogo/takorogo.github.io/) default repository branch.

Website is deployed to GitHub Pages from [`master`](https://github.com/takorogo/takorogo.github.io/tree/master) branch.


Deployment
----------

Ensure that you are in `dev` branch

```bash
git checkout dev
```

Deploy it to `master` with Grunt

```bash
grunt deploy
```
