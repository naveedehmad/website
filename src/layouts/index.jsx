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
          My Site
        </Link>
      </h1>
      <Navigation pages={ data.allMarkdownRemark.edges } />
    </div>
  </div>

const loadHead = () => {
    if (document.location.pathname !== '/admin') {
        return (
            <Helmet
            title="MySite"
            meta={[
                { name: 'description', content: 'SEO Description here' },
                { name: 'keywords', content: 'SEO Title here' },
            ]}>
                <link rel="stylesheet" key="material-icons" href="http://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="stylesheet" key="material-styles" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" />
            </Helmet>
        );
    }
}

const TemplateWrapper = ({ data, children }) =>
  <div>
    { loadHead() }
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
