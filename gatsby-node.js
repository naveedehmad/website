const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const resolve = (p) => path.resolve(`./src/templates/${p}.jsx`);

const getTemplate = (slug) => {
    switch(slug) {
        case '/':
            return resolve('index');
        default:
            return resolve('default');
    }
};

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: 'pages' });
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });
    }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    return new Promise((resolve, reject) => {
        graphql(`{
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }`).then(result => {
            result.data.allMarkdownRemark.edges.map(({ node }) => {
                const { slug } = node.fields;
                createPage({
                    path: slug,
                    component: getTemplate(slug),
                    context: { slug },
                });
            });
            resolve();
        });
    });
};
