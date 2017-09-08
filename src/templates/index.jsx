import React from 'react';
import Featured from '../components/Featured';

export default ({ data }) => {
    const page = data.markdownRemark;
    const { title, featured } = page.frontmatter;

    return (
        <div>
            <h1>{ title }</h1>
            <Featured items={ featured } />
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
                featured {
                    title
                    icon
                    color
                    text
                }
            }
        }
    }
`;
