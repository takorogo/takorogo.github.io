Takorogo Project
================

This is the repository for the Takorogo official [website](http://takorogo.github.io/).


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
