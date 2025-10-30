import React from 'react';
import styles from './Company.module.css';
import RCCard from './RCCard/RCCard';
import ArrowRight from '../../common/ArrowRight';
import classNames from 'classnames';

const Company = ({
  scrollToDevConst,
  setScrollVerticalRefs,
}: {
  scrollToDevConst: () => void;
  setScrollVerticalRefs: (el: HTMLDivElement | null) => void;
}) => {
  return (
    <>
      <div
        className="flex h-full w-full shrink-0 flex-col justify-between p-[16px] sm:p-[20px]"
        ref={setScrollVerticalRefs}
      >
        <div className="mx-auto flex w-full flex-wrap gap-x-[101px] gap-y-[37px] hd:max-w-[1920px]">
          <div className="h-[50px] w-full min-w-[343px] max-w-[707px] sm:h-[60px]"></div>
          <div className="mt-[-11px] grow space-y-[30px]">
            <div className="overflow-hidden pr-[117px]">
              <div className="ml-[-1px] max-w-[400px] text-[70px] font-bold uppercase leading-[60px] tracking-wide sm:max-w-[900px] sm:text-[140px] sm:leading-[120px]">
                <div className="inline-block overflow-hidden">
                  <h1 className={styles.slideUpRotate}>компания&nbsp;</h1>
                </div>
                <div className="inline-block overflow-hidden">
                  <h1 className={styles.slideUpRotate}>третьего</h1>
                </div>
                <br />
                <div className="inline-block overflow-hidden">
                  <h1 className={styles.slideUpRotate}>тысячелетия</h1>
                </div>
              </div>
            </div>
            <div className="max-w-[276px] font-inter text-[15px] leading-[20px] tracking-tighter sm:max-w-[396px] sm:text-[18px]">
              <p className={styles.slideUpOpacity}>
                Наш многолетний опыт и&nbsp;уникальные технологии гарантируют успех строительства
                в&nbsp;сотрудничестве с&nbsp;нашей компанией
              </p>
            </div>
          </div>
        </div>
        <article className="mx-[-16px] my-[-16px] flex items-end justify-between sm:m-[0]">
          <div className="group relative max-h-[104px] w-full max-w-[307px] font-inter tracking-tighter sm:max-h-[120px] sm:max-w-[370px]">
            <RCCard />
          </div>
          <div onClick={scrollToDevConst} className="invisible sm:visible">
            <ArrowRight className={classNames(styles.slideRightOpacity, 'cursor-pointer')} />
          </div>
        </article>
      </div>
    </>
  );
};

export default Company;
