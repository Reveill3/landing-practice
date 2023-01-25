import React from 'react';

const NavBar = () => {
  return (
    <div className='flex bg-black/50 h-16'>
      <div className='w-3.75 text-black p-2 flex items-center'>
        <img
          src='https://picsum.photos/seed/web3/50/50'
          className='rounded-full'
        />
      </div>
      <div className='flex items-center gap-5 text-black justify-center bg-blue-300'>
        <a href='./'>Home</a>
        <a href='./'>Home</a>
        <a href='./'>Home</a>
        <a href='./'>Home</a>
      </div>
    </div>
  );
};

export default NavBar;
