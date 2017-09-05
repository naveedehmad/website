import React from 'react';
import Link from 'gatsby-link';
import Navigation from '../components/Navigation';

export default ({ data }) => {
    const page = data.markdownRemark;
    const { title } = page.frontmatter;

    return (
        <div>
            <h1>{ title }</h1>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </div>
    );
};

export const query = graphql`
    query HomePageQuery {
        markdownRemark(fields: { slug: { eq: "/" } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
