import React from 'react';

const DevConst = () => {
  return (
    <>
      <div className='w-full h-full bg-orange-500 flex flex-col justify-center items-center text-white'>
        <div className=''>
          <svg
            width='10'
            height='10'
            viewBox='0 0 10 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect id='sqr' width='10' height='10' fill='white' />
          </svg>
          <p className='font-halvarBreit text-[14px] leading-[25px] tracking-tight'>девелопмент</p>
        </div>
        <div>
          <p>для тех, кто ищет новый дом</p>
        </div>
        <div>
          <img src='./images/' alt='building' />
        </div>
        <div>
          <p>
            Более 10 925 счастливых жителей приобрели квартиры в, построенных
            нами, домами.
          </p>
        </div>
      </div>
      <div className='w-full h-full bg-blue-500 flex flex-col text-white'>
        <div>
          <svg
            width='10'
            height='10'
            viewBox='0 0 10 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect id='sqr' width='10' height='10' fill='white' />
          </svg>
          <p className='font-halvarBreit '>строительство</p>
        </div>
        <div>
          <p>для тех, кто ищет экспертов</p>
        </div>
        <div>
          <img src='./images/' alt='builders work' />
        </div>
        <div>
          <p>
            Принимаем участие в строительстве масштабных объектов города,
            области, Приволжского федерального округа, Московской области и
            Владимирской области.
          </p>
        </div>
      </div>
    </>
  );
};

export default DevConst;
