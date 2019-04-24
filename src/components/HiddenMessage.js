import React, { Component } from 'react';

class HiddenMessage extends Component {
    constructor(props) {
        super(props)
        // Initialize state.
        // Props are used as States.
        this.state = {
            hidden: (props.hide) ? props.hide : true
        }
    }

    // The only way to change State during lifecycle methods being invoked.
    componentWillReceiveProps(nextProps) {
        this.setState({ hidden: nextProps.hide })
    }

    render() {
        // children is the reserved word who presents the content within tags.
        const { children } = this.props
        const { hidden } = this.state
        return (
            <p>
                {(hidden) ?
                    children.replace(/[a-zA-Z0-9]/g, "x") :
                    children
                }
            </p>
        )
    }
}

export default HiddenMessage