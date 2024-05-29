import React from 'react';

const Cart = () => {
  return (
    <div className='bg-gray-100 w-full py-5'>
      <h2 className='text-center text-2xl font-bold p-5'>Shopping Cart</h2>
      <div className='bg-white w-[90%] md:w-[80%] mb-2 m-auto shadow-sm rounded-md px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center border'>
        <div className='flex flex-col md:flex-row items-center w-full'>
          <img className='w-24 h-28 rounded-sm' src='https://assets.ajio.com/medias/sys_master/root/20230823/tdNr/64e62a63afa4cf41f57257a3/-473Wx593H-469495049-grey-MODEL.jpg' alt='Product' />
          <div className='p-3 m-2 text-center md:text-left flex-1'>
            <p className='font-bold'>Title</p>
            <p className='text-sm'>Description goes here</p>
          </div>
          <div className='flex justify-between items-center w-full md:w-auto'>
            <p className='mr-4 text-lg font-semibold'>120 Rs</p>
            <button className='bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600'>Remove</button>
          </div>
        </div>
      </div>
      <div className='bg-white w-[90%] md:w-[80%] mb-2 m-auto shadow-sm rounded-md px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center border'>
        <div className='flex flex-col md:flex-row items-center w-full'>
          <img className='w-24 h-28 rounded-sm' src='https://assets.ajio.com/medias/sys_master/root/20230823/tdNr/64e62a63afa4cf41f57257a3/-473Wx593H-469495049-grey-MODEL.jpg' alt='Product' />
          <div className='p-3 m-2 text-center md:text-left flex-1'>
            <p className='font-bold'>Title</p>
            <p className='text-sm'>Description goes here</p>
          </div>
          <div className='flex justify-between items-center w-full md:w-auto'>
            <p className='mr-4 text-lg font-semibold'>120 Rs</p>
            <button className='bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600'>Remove</button>
          </div>
        </div>
      </div>
      <div className='bg-white w-[90%] md:w-[80%] mb-2 m-auto shadow-sm rounded-md px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center border'>
        <div className='flex flex-col md:flex-row items-center w-full'>
          <img className='w-24 h-28 rounded-sm' src='https://assets.ajio.com/medias/sys_master/root/20230823/tdNr/64e62a63afa4cf41f57257a3/-473Wx593H-469495049-grey-MODEL.jpg' alt='Product' />
          <div className='p-3 m-2 text-center md:text-left flex-1'>
            <p className='font-bold'>Title</p>
            <p className='text-sm'>Description goes here</p>
          </div>
          <div className='flex justify-between items-center w-full md:w-auto'>
            <p className='mr-4 text-lg font-semibold'>120 Rs</p>
            <button className='bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600'>Remove</button>
          </div>
        </div>
      </div>
      <div className='bg-white w-[90%] md:w-[80%] mb-2 m-auto shadow-sm rounded-md px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center border'>
        <div className='flex flex-col md:flex-row items-center w-full'>
          <img className='w-24 h-28 rounded-sm' src='https://assets.ajio.com/medias/sys_master/root/20230823/tdNr/64e62a63afa4cf41f57257a3/-473Wx593H-469495049-grey-MODEL.jpg' alt='Product' />
          <div className='p-3 m-2 text-center md:text-left flex-1'>
            <p className='font-bold'>Title</p>
            <p className='text-sm'>Description goes here</p>
          </div>
          <div className='flex justify-between items-center w-full md:w-auto'>
            <p className='mr-4 text-lg font-semibold'>120 Rs</p>
            <button className='bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600'>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
