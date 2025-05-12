import React from "react";

const Card = ({
  adress = "no adress",
	price = "no price",
  DueDate = "no date",
  information = "information not find",
}: {
  adress?: string;
  price?: string;
  DueDate?: string;
  information?: string;
}) => {
  return (
    <div className="h-[538px] w-[460px] bg-orange-500">
      <div className="flex h-full w-full flex-col p-[20px] text-white">
        <div>
          <div className="h-[1px] w-full bg-white"></div>
          <div className="flex h-[80px] justify-between pb-[16px] pt-[6px]">
            <div className="font-inter text-[10px] font-semibold uppercase leading-[23px] tracking-tighter opacity-60">
              адрес
            </div>
            <div className="content-end">
              <p className="font-inter text-[18px] font-medium leading-[22px] tracking-veryTight">
                {adress}
              </p>
            </div>
          </div>
          <div className="h-[1px] w-full bg-white"></div>
          <div className="flex h-[80px]">
            <div className="flex w-[170px] justify-between pb-[12px] pt-[6px]">
              <div className="font-inter text-[10px] font-semibold uppercase leading-[23px] tracking-tighter opacity-60">
                цена от
              </div>
              <div className="content-end">
                <p className="font-inter text-[18px] font-medium leading-[22px] tracking-veryTight">
                  {price}
                </p>
              </div>
            </div>
            <div className="ml-[15px] mr-[18px] h-full w-[1px] bg-white"></div>
            <div className="flex grow justify-between pb-[12px] pt-[6px]">
              <div className="font-inter text-[10px] font-semibold uppercase leading-[23px] tracking-tighter opacity-60">
                срок сдачи
              </div>
              <div className="content-end">
                <p className="font-inter text-[18px] font-medium leading-[22px] tracking-veryTight">
                  {DueDate}
                </p>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-white"></div>
        </div>
        <div className="mt-auto w-[310px]">
          <p className="font-inter text-[18px] font-medium leading-[22px] tracking-veryTight">
            {information}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
