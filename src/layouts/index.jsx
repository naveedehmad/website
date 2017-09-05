import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Navigation from '../components/Navigation';

import './index.css'

const Header = ({ data }) =>
  <div
    style={{
      marginBottom: '25px',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          SalesHero
        </Link>
      </h1>
      <Navigation pages={ data.allMarkdownRemark.edges } />
    </div>
  </div>

const TemplateWrapper = ({ data, children }) =>
  <div>
    <Helmet
      title="SalesHero"
      meta={[
        { name: 'description', content: 'SEO Description here' },
        { name: 'keywords', content: 'SEO Title here' },
      ]}
    />
    <Header data={ data } />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      { children() }
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
    query NavigationQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;