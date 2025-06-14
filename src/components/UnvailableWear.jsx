import React from 'react'
import { LoaderCircle } from 'lucide-react';
import "../Styles/UnvailableWear.scss"

function UnvailableWear({selectedCategory}) {
  return (
    <div className='error-page'>
        <h2>
            No Product Available
        </h2>
        <p>We're sorry, but there are no <strong>{selectedCategory} </strong>products matching on criteria at the moment.</p>
        <div className="loading">
            <LoaderCircle className='loader' />
            <span>We're restocking shortly</span>
        </div>
            <p>Please check back later or explore our other product categories.</p>
    </div>
  )
}

export default UnvailableWear