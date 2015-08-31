<script>
module.exports = {
    data: function(){
        return { 
            resettable_base: {},
            resettable_current: {},
        }
    },
    created: function(){
        var initialData = JSON.parse(JSON.stringify(this._data));
        
        delete initialData["resettable_base"];
        delete initialData["resettable_current"];
        this.update(initialData);
    },
    methods: {
        update: function(newBaseData){
            var self = this;
            var baseData = newBaseData ? newBaseData : self.resettable_current;

            Object.keys(baseData).forEach(function(key){
                self.$watch(key, function(newVal, oldVal){ self.resettable_current[key] = newVal },{ deep: true});
            });
            this.resettable_base = JSON.parse(JSON.stringify(baseData));

            Object.getOwnPropertyNames(self.$options.computed).forEach(function(n){
                self.resettable_base[n] = self[n];
            });

            self.reset();
        },
        getBase: function(paramName){
            return paramName ? this.resettable_base[paramName] : this.resettable_base;
        },
        reset: function(){
            var self = this;
            self.resettable_current = JSON.parse(JSON.stringify(self.resettable_base));
            Object.keys(self.resettable_base).forEach(function(key){
                self.$data[key] = self.resettable_base[key];
            });
        },
        changed: function(paramName){
            if(paramName){
                return JSON.stringify(this.resettable_base[paramName]) !== JSON.stringify(this.resettable_current[paramName]) ? true : false;
            } else {
                return JSON.stringify(this.resettable_base) !== JSON.stringify(this.resettable_current) ? true : false;
            }
        }
    },
    replase: true
}
</script>
