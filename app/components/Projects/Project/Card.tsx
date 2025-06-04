import React from 'react';

const Card = ({
  adress = 'no adress',
  price = 'no price',
  DueDate = 'no date',
  information = 'information not find',
}: {
  adress?: string;
  price?: string;
  DueDate?: string;
  information?: string;
}) => {
  return (
    <div className="h-[344px] w-[299px] bg-orange-500 hd:h-[538px] hd:w-[460px]">
      <div className="flex h-full w-full flex-col px-[10px] pb-[8px] pt-[16px] text-white hd:p-[20px]">
        <div>
          <div className="h-[1px] w-full bg-white"></div>
          <div className="flex h-[80px] flex-col justify-between pb-[16px] pt-[6px]">
            <div className="font-inter text-[10px] font-semibold uppercase leading-[23px] tracking-tighter opacity-60">
              адрес
            </div>
            <div className="self-end">
              <p className="font-inter text-[18px] font-medium leading-[22px] tracking-veryTight">
                {adress}
              </p>
            </div>
          </div>
          <div className="h-[1px] w-full bg-white"></div>
          <div className="flex h-[80px]">
            <div className="flex w-[130px] flex-col justify-between pb-[12px] pr-[18px] pt-[6px] hd:w-[170px]">
              <div className="font-inter text-[10px] font-semibold uppercase leading-[23px] tracking-tighter opacity-60">
                цена от
              </div>
              <div className="self-end">
                <p className="font-inter text-[18px] font-medium leading-[22px] tracking-veryTight">
                  {price}
                </p>
              </div>
            </div>
            <div className="h-full w-[1px] bg-white"></div>
            <div className="flex grow flex-col justify-between pb-[12px] pt-[6px]">
              <div className="pl-[15px] font-inter text-[10px] font-semibold uppercase leading-[23px] tracking-tighter opacity-60">
                срок сдачи
              </div>
              <div className="self-end">
                <p className="font-inter text-[18px] font-medium leading-[22px] tracking-veryTight">
                  {DueDate}
                </p>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-white"></div>
        </div>
        <div className="mt-auto w-[221px] hd:w-[310px]">
          <p className="font-inter text-[15px] font-medium leading-[22px] tracking-veryTight hd:text-[18px] hd:leading-[22px]">
            {information}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
