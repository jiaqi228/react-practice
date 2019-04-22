import React, { Component } from 'react';
import Color from './Color'

class ColorList extends Component {
    render() {
        const { colors, onRate, onRemove } = this.props
        return (
            <div className="color-list">
                {
                    (colors.length === 0) ?
                        <p>No Colors Listed. (Add a Color)</p> :
                        colors.maps(color => <Color key={color.id} {...color} onRate={(rating) => onRate(color.id, rating)} onRemove={() => onRemove(color.id)} />)
                }
            </div>
        )
    }
}

ColorList.defaultProps = {
    colors: [],
    onRate: f => f,
    onRemove: f => f
}

export default Color