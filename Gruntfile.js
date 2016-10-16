
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jsdoc: {
      dist: {
        src: ['index.js',   'README.md'],
        options: {
          destination: 'doc',
          configure: './JSDoc.json',
          template: './node_modules/ink-docstrap/template'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-jsdoc');
};
