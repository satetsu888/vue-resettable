(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["resettable"] = factory();
	else
		root["resettable"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var resettable = __webpack_require__(2);
	module.exports = resettable;


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3)


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	    data: function(){
	        return { 
	            base: {},
	            current: {},
	        }
	    },
	    created: function(){
	        var initialData = JSON.parse(JSON.stringify(this._data));
	        
	        delete initialData["base"];
	        delete initialData["current"];
	        this.update(initialData);
	    },
	    methods: {
	        update: function(newBaseData){
	            var self = this;
	            var baseData = newBaseData ? newBaseData : self.current;

	            Object.keys(baseData).forEach(function(key){
	                self.$watch(key, function(newVal, oldVal){ self.current[key] = newVal },{ deep: true});
	            });
	            this.base = JSON.parse(JSON.stringify(baseData));

	            self.reset();
	        },
	        getBase: function(paramName){
	            return paramName ? this.base[paramName] : this.base;
	        },
	        reset: function(){
	            var self = this;
	            self.current = JSON.parse(JSON.stringify(self.base));
	            Object.keys(self.base).forEach(function(key){
	                self.$data[key] = self.base[key];
	            });
	        },
	        changed: function(paramName){
	            if(paramName){
	                return JSON.stringify(this.base[paramName]) !== JSON.stringify(this.current[paramName]) ? true : false;
	            } else {
	                return JSON.stringify(this.base) !== JSON.stringify(this.current) ? true : false;
	            }
	        }
	    },
	    replase: true
	}

/***/ }
/******/ ])
});
;