var assert = require('assert');
var testCase = require('mocha').describe;

testCase('address', function() {

    var addr = require('./index');

    it('it should be there when you require it', function () {
      assert( typeof addr !== undefined, 'not there for me');
    });

    it('it should have basic competencies', function () {
      assert( addr(1, 1) === '$A$1', 'not there for me: ' + addr(1, 1));
      assert( addr(10, 1) === '$A$10', 'not there for me: ' + addr(10, 1));
      assert( addr(42, 42) === '$AP$42', 'not there for me: ' + addr(42, 42));
    });

});
