module.exports = {
    entry: "./index.js",
    output: {
        path: "./dest",
        filename: "vue-resettable.js",
        library: "resettable",
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
        ]
    }
};
