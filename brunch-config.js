module.exports = {
    files: {
        javascripts: {
            entryPoints: {
                'src/main.js': 'bundle.js',
            }
        }
    },
    paths: {
        watched: ['src'], // use watched this, because default watched directory 'app'
        public: 'www/' // rename output directory
    },
    stylesheets: {
        joinTo: 'app.css'
    },
}