# vue-resettable

[![npm version](https://badge.fury.io/js/vue-resettable.svg)](http://badge.fury.io/js/vue-resettable)

[![Build Status](https://travis-ci.org/satetsu888/vue-resettable.svg?branch=master)](https://travis-ci.org/satetsu888/vue-resettable)

Vue.js component to provide resettable VM.

## Install

`npm install vue-resettable`

## How to Use

Mixin to your component, then you can use below function in your component.

### methods

- reset() - reset $data
- update() - set current value as default
- getBase([paramName]) - get default $data.[paramName]
- changed([paramName]) - check $data.[paramName] has changed

## Sample Code

```
<div id="app">
    <color-component color="#aabbcc"></color-component>
</div>

<script type="x-template" id="color-component">
    <div>
        <p style="background-color:{{getBase('color')}}">baseData:{{getBase('color')}}</p>
        <p style="background-color:{{color}}">currentData:{{color}}</p>
        <p><input type=text v-model="color"></p>
        changed: {{changed("color")}} <br>
        <input type=button value="Reset" v-on="click: reset">
        <input type=button value="Update"v-on="click: update()">
    </div>
</script>

<script>
    var resettable = require('vue-resettable');
    var colorComponent = Vue.extend({
        props: ["color"],
        template: "#color-component",
        mixins: [resettable]
    });

    var app = new Vue({
        el: '#app',
        components:{
            'color-component': colorComponent
        }
    })
</script>

```

See some working samples at https://github.com/satetsu888/vue-resettable-sample

