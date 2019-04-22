import React from 'react'
import PropTypes from 'prop-types'

class Star extends React.Component {
    render() {
        const { selected = false, onClick = f => f } = this.props
        return (
            <div className={(selected) ? "star selected" : "star"} onClick={onClick}>
            </div>
        )
    }
}

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default Star