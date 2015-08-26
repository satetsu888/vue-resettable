<script>
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
</script>
