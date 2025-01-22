'use client';
import Main from './components/Main/Main';
import Preloader from './components/Preloader/Preloader';
import React from 'react';

const page = () => {
  return (
    <>
      <Preloader />
      <div className='relative'>
        <Main />
      </div>
    </>
  );
};

export default page;
