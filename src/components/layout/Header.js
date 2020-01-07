import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    const { branding } = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
            <div className="container">
                <a className="navbar-brand" href="/">{branding}</a>
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                    </ul>
                </div>
            </div>


        </nav>
    );
}

Header.defaultProps = {
    branding: 'My App'
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;
