const withPreact = require('next-plugin-preact');

module.exports = withPreact({
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

        return config
        },
    images: {
        loader: 'cloudinary',
        path: `https://res.cloudinary.com/czernous/image/upload/`
    }
});

