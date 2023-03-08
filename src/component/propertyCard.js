import React from 'react'
import image from '../assets/property-1.png'
import HotelIcon from '@mui/icons-material/Hotel';
export default function PropertyCard() {
  return (
    <div style={{
        width: 546,
        height: 244,
    }}>
        <img src={image} alt="" />
        <div>
            <h3>
                $500
            </h3>
            <h3>
                Awais
            </h3>
            <p>
                Property Dealer
            </p>
            <HotelIcon/>
        </div>
    </div>
  )
}
