import React from 'react';
import Link from 'gatsby-link';

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
    query DefaultPageQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
            }
            html
        }
    }
`;
