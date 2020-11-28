module.exports = {
    mount: {
        public: '/',
        src: '/_dist_'
    },
    plugins: [
        '@snowpack/plugin-dotenv',
        [
            '@snowpack/plugin-typescript',
            {
                args: '--project src/tsconfig.json'
            }
        ],
        '@prefresh/snowpack'
    ],
    install: ['preact'],
    installOptions: {
        installTypes: true
    }
};