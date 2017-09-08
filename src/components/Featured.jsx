import React, { PropTypes as P } from 'react';

const getFeaturedItem = ({ title, icon, color, text }) => (
    <div className={ `${color}-text col s6 center` }>
        <h2>
            <i  className="material-icons">{ icon }</i>
            <br />
            { title }
        </h2>
        <p>{ text }</p>
    </div>
)

const Featured = ({ items }) => (
    <div className="container featured-items">
        <div className="row">
            { items && items.map((item) => getFeaturedItem(item) ) }
        </div>
    </div>
);

Featured.propTypes = {
    items: P.array
};
Featured.defaultProps = {
    items: []
};

export default Featured;
