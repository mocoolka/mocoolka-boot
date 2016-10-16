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
 * Created by fastspeeed@gmail.com on 2016/10/13.
 */
'use strict';
var MkServer = require('../index');
var loopback = require('loopback');
var assert = require('chai').assert;
//noinspection Eslint
describe('mk-server', function() {
  var app = loopback();

  /* app.start = function() {
   // start the web server
   return app.listen(function() {
   app.emit('started');
   var baseUrl = app.get('url').replace(/\/$/, '');
   console.log('Web server listening at: %s', baseUrl);
   if (app.get('loopback-component-explorer')) {
   var explorerPath = app.get('loopback-component-explorer').mountPath;
   console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
   }
   });
   };*/

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
  /*  boot(app, __dirname, function(err) {
   /!*  if (err) throw err;
   app.use('/express-status', function(req, res, next) {
   res.json({ running: true });
   });*!/
   // start the server if `$ node server.js`
   /!*  if (require.main === module)
   app.start();*!/
   });*/

  it('calls init models and BootScripts', function(done) {
    MkServer(app, './test',
      ['Datasources', 'Models', 'BootScripts'],
      function(err) {
        app.models.MkAction.all({include: 'MkActionType'},
          function(error, data) {
            assert(data.length == 2,
              'The Length of mkActionType\'s datas is 2');
            done();
          });
      });
  });
});
