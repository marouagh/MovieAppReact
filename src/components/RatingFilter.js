import React from 'react'
import Rating from './Rating'

const RatingFilter = ({stars, handleChangeRating}) => (
    <div className="rating-filter">
        <span><Rating stars={stars} handleChangeRating={(myRating) => {handleChangeRating(myRating)}}/></span>
    </div>
)

export default RatingFilter