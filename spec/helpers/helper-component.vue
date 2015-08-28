<template>
    <div>
        <p>name: <input type=text v-model="name"> changed: {{changed("name")}}</p>
        <p>nickname: <input type=text v-model="nickname"> changed: {{changed("nickname")}}</p>
        <p>age: <input type=range min=0 max=200 v-model="age">{{age}} change: {{changed("age")}}</p>

        changed: {{changed()}} <br>
        <input type=button value="Reset" v-on="click: reset">
        <input type=button value="Update" v-on="click: update()">
    </div>
</template>

<script>
var resettable = require('../../index.js');
var Vue = require('vue');
module.exports = Vue.extend({
    components: {
        'helper-component': require('./helper-component.vue')
    },
    mixins: [ resettable ]
});
</script>
