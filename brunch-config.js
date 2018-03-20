module.exports = {
    files: {
        javascripts: {
            entryPoints: {
                'src/main.js': 'bundle.js',
            },
            joinTo: 'bundle.js'
        }
    },
    paths: {
        watched: ['src'], // use watched this, because default watched directory 'app'
        public: 'www/' // rename output directory
    },
    plugins: {
        vue: {
            extractCSS: true,
            out: 'www/components.css'
        }
    },
    hooks: {
        preCompile() {
            console.log('Start...')
        },
        onCompile(generatedFiles, changedAssets) {
            console.log(generatedFiles.map(f => f.path));
        },
    }

}