module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {   
                "targets": {
                    "node": 6
                }
                // "useBuiltIns": "usage",
                // "corejs": 3
            }
        ]
    ],
    "plugins": [
        [
            "component",
            {
                "libraryName": "lodash",
                "style": false,
                "libDir": "",
                "camel2Dash": false
            },
            "lodash"
        ]
        // [
        //     "@babel/plugin-transform-runtime",
        //     {
        //         "corejs": 3
        //     }
        // ]
    ]
}