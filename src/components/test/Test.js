import React, { Component } from 'react';

class Test extends Component {
    componentDidMount() {
        console.log('ComponentDidMount...');
    }

    componentDidUpdate() {
        console.log('ComponentWillMount...');
    }


    render() {
        return (
            <div>
                <h1>Test Component</h1>

            </div>
        );
    }
}

export default Test;