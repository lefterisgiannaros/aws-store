import React from 'react'
import './Checkout.css'

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img 
        className='checkout__ad' 
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/onsite/Apr18/PeX_1500x200._CB1198675309_.jpg" 
        alt='404'/>
    
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
        </div>
      </div>

      <div className='checkout__right'>
        <h2>The subtotal will go here</h2>
      </div>
        
    </div>
  )
}

export default Checkout