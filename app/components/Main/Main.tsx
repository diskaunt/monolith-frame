import styles from './Main.module.css';
import React, { RefCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import DevConst from './developeConst/DevConst';
import useInactiveTimeout from '@/hooks/useInactiveTimeout';
import Company from './Company/Company';
import AboutUs from '../AboutUs/AboutUs';
import useScrollSync from '@/hooks/useScrollSync';
import Nav from './Navbar/Nav';

const Main = () => {
	// let scrollRef = useRef<HTMLDivElement>(null);
	const mainRef = useRef<HTMLDivElement>(null);
  const [scrollEnd, setScrollEnd] = useState(false);
  const aboutUsRef = useRef<HTMLDivElement>(null);

	const scrollRef = useScrollSync(
		{
			root: null,
			threshold: [1],
		},
		// scrollRef.current,
		// mainRef.current
	);

  const scrollToDevConst = () => {
		scrollRef.current &&
		scrollRef.current.scrollTo({
			left: scrollRef.current.clientWidth,
			behavior: 'smooth',
		});
    mainRef.current &&
		window.scrollTo({
			top: mainRef.current.clientWidth,
			behavior: 'smooth',
		});
    setScrollEnd(true);
  };


  // useInactiveTimeout(scrollToDevConst, 6000);

  return (
    <>
      <div className='relative text-white z-20'>
        <Nav />
      </div>
      <section
        ref={mainRef}
        className='relative h-fit hd:h-mainW-hd w-full z-10'
      >
        <div className='top-[0] left-[0] w-100vw-scroll hd:sticky hd:h-[100svh] overflow-hidden'>
          <div
            ref={scrollRef}
            className={classNames(
              styles.main,
              'hd:flex h-full overflow-auto snap-mandatory scroll-smooth snap-x'
            )}
          >
            <div
              className={classNames(
                styles.container,
                'flex shrink-0 flex-col justify-between w-full h-[100svh] text-white sm:p-[20px] p-[16px] snap-start'
              )}
            >
              <Company scrollToDevConst={scrollToDevConst} />
            </div>
            <div className='flex shrink-0 flex-wrap w-full h-[100svh] max-w-100vw-scroll gap-0 snap-start hd:max-w-[1765px] hd:w-devConst-hd md:flex-nowrap'>
              <DevConst scrollEnd={scrollEnd} />
            </div>
          </div>
        </div>
      </section>
      <section
        ref={aboutUsRef}
        className={classNames(styles.aboutUsLoad, 'relative')}
      >
        <AboutUs />
      </section>
    </>
  );
};

export default Main;
