import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onShowClick = (e) => {
        // console.log(e.target);
        this.setState({
            showContactInfo: !this.state.showContactInfo
        });
    };

    onDeleteClick = async (id, dispatch) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        } catch (e) {
            console.log(e);
        }

        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        });
    }

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4 style={heading}>
                                {name} {' '}
                                <i onClick={this.onShowClick} style={{ cursor: "pointer" }} className="fa fa-sort-down"></i>
                                <i onClick={this.onDeleteClick.bind(this, id, dispatch)} style={{ cursor: "pointer", float: "right", color: "red" }} className="fa fa-trash"></i>
                                <Link to={`contact/edit/${id}`}><i style={{ cursor: "pointer", float: "right", color: "black", marginRight: '1rem' }} className="fa fa-pencil"></i></Link>
                            </h4>
                            {showContactInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>
                            ) : null}
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}

const heading = {
    color: 'black',
    fontSize: '20px'
}

export default Contact;