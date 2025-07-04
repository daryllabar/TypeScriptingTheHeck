const Path = require('path');
const Webpack = require('webpack');

const entries = {};
const forms = [
    "account"
];
const page = [
    // "somePage"
];

const ribbon = [
    // "someRibbon"
];

forms.forEach((f) => {
    entries[f] = {
        import: `./src/form/${f}.ts`,
        filename: `form/${f}.js`,
        library: {
            type: 'var',
            name: ['Heck', 'Form']
        }
    };
});

page.forEach((f) => {
    entries[f] = {
        import: `./src/page/${f}.ts`,
        filename: `page/${f}.js`,
        library: {
            type: 'var',
            name: ['Heck', 'Page']
        }
    };
});

ribbon.forEach((f) => {
    entries[f] = {
        import: `./src/ribbon/${f}.ts`,
        filename: `ribbon/${f}.js`,
        library: {
            type: 'var',
            name: ['Heck', 'Ribbon']
        }
    };
});

module.exports = {
    devtool: 'source-map',
    entry: entries,
    output: {
        clean: {
            keep: /external\//
        },
        filename: '[name].js',
        library: ['heck', '[name]'],
        libraryTarget: 'var',
        path: Path.resolve(__dirname, './Webresources/heck_/js'),
        publicPath: Path.resolve(__dirname, './Webresources'),
        sourceMapFilename: '[file].map',
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, {
            test: require.resolve("./src/lib/dg.xrmquery.web.min"),
            loader: "exports-loader",
            options: {
                exports: ["XrmQuery", "Filter", "XQW"]
            }
        }, ],
    },
    plugins: [
        new Webpack.ProvidePlugin({
            XrmQuery: [Path.resolve(__dirname, "./src/lib/dg.xrmquery.web.min"), "XrmQuery"],
            Filter: [Path.resolve(__dirname, "./src/lib/dg.xrmquery.web.min"), "Filter"],
            XQW: [Path.resolve(__dirname, "./src/lib/dg.xrmquery.web.min"), "XQW"],
        })
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    }
};

