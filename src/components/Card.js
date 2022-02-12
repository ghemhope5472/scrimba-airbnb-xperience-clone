import React from 'react'

function Card(props) {

    let badgeText 
    if( props.openSpots === 0 ){
        badgeText = 'SOLD OUT'
    } else if ( props.location === 'Online') {
        badgeText ='ONLINE'
    }else {

    }

    return (
        <div className='card'>

            { badgeText && <div className='badge'> {badgeText} </div>}
            {/* <div className='badge'> {badgeText} </div> */}
            <img src={`images/${props.coverImg}`} className='card-img' />
            <div className='rating-container'>
                <img src='images/star.png' className='star-img' /> <p> {props.stats.rating}  <span className='rating'> (6) USA </span></p>
            </div>
            <p> {props.title} </p>
            <p> <strong>From ${props.price}</strong> / person</p>
        </div>
    )
}

export default Card