import React from 'react'

export default class Hello extends React.Component {
    render() {
        const {name, age} = this.props;
        return (
            <div>
                Hello {name}, you are {age}
            </div>
        );
    }
}