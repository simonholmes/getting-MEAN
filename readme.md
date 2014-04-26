Getting MEAN application code
=============================

This is the code for the sample 'Loc8r' application that is built through the course of my book [Getting MEAN](http://www.manning.com/sholmes/).

This branch holds the code as it stands part way through Chapter 4 *Building a static site with Node.js and Express*. By the end of section 4.4 the first version of the static prototype is complete, with all of the data hard-coded into the views. This branch holds that version. Section 4.5 removes the data from the views and moves it into the controllers; the code for that is in branch `chapter-04`.

Clone this branch with the following commands (in a fresh folder)
```sh
$ git init
$ git clone -b chapter-04-views https://github.com/simonholmes/getting-MEAN.git
```
Install the npm module dependencies:
```sh
$ cd getting-MEAN
$ npm install
```
Getting MEAN is published by Manning, and is currently available through their early access program: [www.manning.com/sholmes/](http://www.manning.com/sholmes/)