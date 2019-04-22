import React, { Component } from 'react';
import StarRating from './StarRating'

class Color extends Component {
    render() {
        const { title, color, rating, onRemove, onRate } = this.props
        return (
            <section className="color">
                <h1>{title}</h1>
                <button onClick={onRemove}>X</button>
                <div className="color" style={{ backgroundColor: color }}>
                </div>
                <div>
                    <StarRating starsSelected={rating} onRate={onRate} />
                </div>
            </section>
        )
    }
}

Color.defaultProps = {
    rating: 0,
    onRemove: f => f,
    onRate: f => f
}

export default Color