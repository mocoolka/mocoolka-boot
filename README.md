# Mocoolka Boot

A convention-based bootstrapper for Mocoolka applications.


## Overview

The mocoolka-boot module initializes (bootstraps) a Mocoolka application.  Specifically, it:
 - Configures data-sources.
 - Defines custom models
 - Defines datas of model
 - Configures models and attaches models to data-sources.
 - Configures application settings
 - Runs additional boot scripts, so you can put custom setup code in multiple small files instead of in the main application file.



## Installation

    npm install mocoolka-boot

## Usage

```js
var loopback = require('loopback');
var boot = require('mocoolka-boot');

var app = loopback();
boot(app, __dirname);

app.use(loopback.rest());
app.listen();

## License

This module is provided under dual MIT/Mocoolka license.  See [LICENSE](LICENSE) for details.
