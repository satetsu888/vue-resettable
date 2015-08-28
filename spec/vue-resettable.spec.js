describe('require vue-resettable', function () {  
    var resettable = require('../index.js');

    it('should have a created hook', function () {
        expect(typeof resettable.created).toBe('function')
    })
})

describe('mixin vue-resettable', function () {  
    var helper = require('./helpers/helper-component.vue');
    var vm = new helper({
        name    : "ihr",
        nickname: "rbbish-bin",
        age     : 28
    });

    it('should have expected function', function () {
        expect(typeof vm.reset).toBe('function')
        expect(typeof vm.update).toBe('function')
        expect(typeof vm.getBase).toBe('function')
        expect(typeof vm.changed).toBe('function')
    })
})

