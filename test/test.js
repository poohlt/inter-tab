var Manager = require('../');
var expect = require('expect.js');

describe('inter-tab', function(){
    var tab1, tab2;

    beforeEach(function() {
        tab1 = new Manager();
        tab2 = new Manager();
    });

    afterEach(function() {
        tab1.destroy();
        tab2.destroy();
    });

    it('should create tab id', function(){
        expect(tab1.id).to.be.a('number');
    });

    it('should yield same tabs array', function(){
        var tabIds1 = tab1.getTabs();
        var tabIds2 = tab2.getTabs();
        expect(tabIds1).to.eql(tabIds2);
    });

    it('should contain right keys in tabs array', function(){
        var tabIds = tab1.getTabs();
        expect(tabIds).to.only.have.keys(tab1.id.toString(), tab2.id.toString());
    });

    it('should correctly destroy a tab', function(){
        tab1.destroy();
        var tabIds = tab2.getTabs();
        expect(tabIds).to.only.have.keys(tab2.id.toString());
    });

    it('should correctly set key-value pairs', function(){
        tab2.set(tab1.id, 'test', 'Hello World');
        var attr = tab2.get(tab1.id, 'test');
        expect(attr).to.be('Hello World');
    });
});
