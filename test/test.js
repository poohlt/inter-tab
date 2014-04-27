var Manager = require('../');
var expect = require('expect.js');

describe('inter-tab', function(){
    it('should create tab id', function(){
        var tab = new Manager();
        expect(tab.id).to.be.a('number');
        tab.destroy();
    });
});
