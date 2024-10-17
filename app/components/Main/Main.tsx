import styles from './Main.module.css';
import React from 'react';
import Nav from './Navigate/Nav';
import classNames from 'classnames';

const Main = () => {
  return (
    <section className={'overflow-hidden'}>
      <div className={classNames(styles.container, 'grid grid-cols-8 grid-rows-2 w-[100%] text-white space-x-[80px]')}>
        <div className={classNames(styles.nav, 'grow col-span-3')}>
          <Nav />
        </div>
        <div className='grow col-span-5 space-y-[30px]'>
          <div className='max-w-[900px] text-[140px] font-bold mw-900px uppercase leading-[120px]'>
            <h1>компания третьего тысячелетия</h1>
          </div>
          <div className={
						'font-inter text-[18px] max-w-[396px]'}>
            <p>
              Наш многолетний опыт и уникальные технологии гарантируют успех
              строительства в сотрудничестве с нашей компанией
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
