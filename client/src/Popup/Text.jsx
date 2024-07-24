import React from 'react'

const Text = () => {
  return (
    <div className='bg-white flex items-center rounded-md p-2 shadow-md m-1'>
    <div className='p-1'>
      <img
        className='w-10 h-10 rounded-full'
        src='https://cdn1.iconfinder.com/data/icons/business-finance-1-1/128/customer-service-512.png'
        alt='Chat Icon'
      />
    </div>
    <div className='bg-red-500 text-white p-2 ml-2 rounded-md'>
      <p>Hello Vignesh</p>
    </div>
  </div>
  )
}

export default Text