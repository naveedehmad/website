module.exports = {
    siteMetadata: {
        title: 'SalesHero Static Site Generator'
    },
    plugins: [{
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'src',
            path: `${__dirname}/src/`
        },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark'
    ]
};

