/*
 *************************************************************************
 * Contact:  http://www.mocoolka.com
 * GNU General Public License Usage
 * This file may be used under the terms of the GNU General Public License version 3.0 as
 * published by the Free Software Foundation and appearing in the file LICENSE included in the
 * packaging of this file.

 * Please review the following information to ensure the GNU General Public License version 3.0
 * requirements will be met: http://www.gnu.org/copyleft/gpl.html.
 * The Original Code is Mocoolka Group.
 * The Initial Developer of the Original Code is MoCoolKa SLU
 * All portions are Copyright (C) 2012-2013 MoCoolKa SLU
 * All Rights Reserved.
 * Contributor(s):  fastspeeed
 ************************************************************************
 */
/**
 * Created by fastspeeed@gmail.com on 2016/10/12.
 */
'use strict';
var MkCompile = require('../lib/mk-compiler');
var assert = require('chai').assert;
/**
 * this is test
 */
describe('mk-compiler', function() {
  it('calls init with error param', function(done) {
    try {
      MkCompile('./test', ['error']);
    } catch (error) {
      assert.equal(error.message,
        'The "error" is in the unsupported format.Value must is in' +
        ' [Config,Models,Datasources,Middleware,Components,BootScripts]');
    }
    done();
  });

  it('calls init Datasources models', function(done) {
    var models = MkCompile('./test', ['Datasources', 'Models']).models;
    // console.log(models);
    assert(models.length == 2, 'The models\'s length must is 2');

    done();
  });
  it('calls init datasources', function(done) {
    var dataSources = MkCompile('./test', ['Datasources']).dataSources;
    var dataSourceFile = require('./datasources.json');
    assert.deepEqual(dataSources, dataSourceFile, JSON.stringify(dataSources) +
      ' must be ' + JSON.stringify(dataSourceFile));
    done();
  });
  it('calls init Middleware', function(done) {
    var Middleware = MkCompile('./test', ['Middleware']).middleware;
    //console.log(Middleware);
    //  var dataSourceFile=require('../datasources.json');
    assert.deepEqual(Middleware.phases, ['initial', 'session',
      'auth', 'parse', 'routes', 'files', 'final']);
    done();
  });
  it('calls init components', function(done) {
    var components = MkCompile('./test', ['Components']).components;
    // console.log(components);
    //  var dataSourceFile=require('../datasources.json');
    assert(components.length == 1);
    done();
  });

  it('calls init BootScripts', function(done) {
    var bootScripts = MkCompile('./test', ['BootScripts']).files.boot;
    // console.log(bootScripts);
    //  var dataSourceFile=require('../datasources.json');
    assert(bootScripts.length == 4);
    done();
  });
  it('calls init Datasources and models and BootScripts', function(done) {
    var bootScripts = MkCompile('./test',
      ['Datasources', 'Models', 'BootScripts'])
      .files.boot;
    //  console.log(bootScripts);
    //  var dataSourceFile=require('../datasources.json');
    assert(bootScripts.length == 4);
    done();
  });
});
