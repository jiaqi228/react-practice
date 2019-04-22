import React from 'react'
import PropTypes from 'prop-types'
import Star from './Star'

class StarRating extends React.Component {

    render() {
        const { totalStars, starsSelected, onRate } = this.props
        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) =>
                    <Star key={i} selected={i < starsSelected} onClick={() => onRate(i + 1)} />
                )}
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }

}


StarRating.propTypes = {
    totalStars: PropTypes.number
}

StarRating.defaultProps = {
    starsSelected: 0,
    totalStars: 5,
    onRate: f => f
}

export default StarRating