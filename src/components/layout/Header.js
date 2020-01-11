import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
    const { branding } = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
            <div className="container">
                <a className="navbar-brand" href="/">{branding}</a>
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/"><i className="fa fa-home"></i> Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact/add"><i className="fa fa-plus"></i> Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about"><i className="fa fa-question"></i> About</Link>
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
