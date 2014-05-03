var Manager = require('../');
var expect = require('expect.js');

describe('inter-tab', function(){
    it('should create tab id', function(){
        var tab = new Manager();
        expect(tab.id).to.be.a('number');
        tab.destroy();
    });

    it('should yield same tabs array', function(){
        var tab1 = new Manager();
        var tab2 = new Manager();
        var tabIds1 = tab1.getTabs();
        var tabIds2 = tab2.getTabs();
        expect(tabIds1).to.eql(tabIds2);
        tab1.destroy();
        tab2.destroy();
    });

    it('should contain right keys in tabs array', function(){
        var tab1 = new Manager();
        var tab2 = new Manager();
        var tabIds = tab1.getTabs();
        expect(tabIds).to.only.have.keys(tab1.id.toString(), tab2.id.toString());
        tab1.destroy();
        tab2.destroy();
    });

    it('should correctly destroy a tab', function(){
        var tab1 = new Manager();
        var tab2 = new Manager();
        tab1.destroy();
        var tabIds = tab2.getTabs();
        expect(tabIds).to.only.have.keys(tab2.id.toString());
        tab2.destroy();
    });

    it('should correctly set key-value pairs', function(){
        var tab1 = new Manager();
        var tab2 = new Manager();
        tab2.set(tab1.id, 'test', 'Hello World');
        var attr = tab2.get(tab1.id, 'test');
        expect(attr).to.be('Hello World');
        tab1.destroy();
        tab2.destroy();
    });
});
