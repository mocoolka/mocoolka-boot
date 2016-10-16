'use strict';
var async = require('async');

module.exports = function(app) {
  var db = app.dataSources.MkActionDB;

  db.automigrate('MkAction', function(err) {
    if (err) return err;
    var MkAction = app.models.MkAction;
    //noinspection Eslint,Eslint
    MkAction.create([{
      name: 'load',
      actionType: 'record'
    }, {
      name: 'save',
      actionType: 'store'
    }]);
  });
};
