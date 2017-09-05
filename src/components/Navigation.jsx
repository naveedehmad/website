import React from 'react';
import Link from 'gatsby-link'

const key = (node) => `key-nav-item-${node.fields.slug}`;
const sortPages = (a, b) => {
    if (a.node.fields.slug < b.node.fields.slug) {
        return -1;
    } else if (a.node.fields.slug > b.node.fields.slug) {
        return 1;
    }
    return 0;
};

const Navigation = ({ pages }) => (
    <ul className="Navigation">
        { 
            pages.sort(sortPages).map(({ node }) => (
                <li key={ key(node) }>
                    <Link to={ node.fields.slug }>
                        { node.frontmatter.title }
                    </Link>
                </li>
            ))
        }
    </ul>
);

export default Navigation;
