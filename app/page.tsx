'use client';
import Main from './components/Main/Main';
import Preloader from './components/Preloader/Preloader';
import React, { useState } from 'react';

const page = () => {
  return (
    <>
			<Preloader/>
      <Main />
    </>
  );
};

export default page;
