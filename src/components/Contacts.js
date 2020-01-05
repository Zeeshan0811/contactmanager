import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'johndoe@gmail.com',
                phone: '555-555-444'
            },
            {
                id: 2,
                name: 'Samir Khan',
                email: 'Samir@gmail.com',
                phone: '5465234-54654-45'
            },
            {
                id: 3,
                name: 'Karan Williams',
                email: 'kwilliam@gmail.com',
                phone: '65464-578975-588'
            }
        ]
    }

    render() {
        const { contacts } = this.state;
        return (
            <div>
                {contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                ))}
            </div>
        )
    }
}

export default Contacts;
