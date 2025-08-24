import React from "react";

const Infrastructure = () => {
  return (
    <React.Fragment>
      <div className="mt-5">
        <div className="text-center text-3xl font-semibold uppercase text-[#10572F] italic">
          ROTARY SECTION
        </div>
        <div className="lg:flex lg:gap-20 space-y-10 p-5">
          <div className="lg:w-[50%] flex lg:h-[600px] justify-center">
            <img
              src="/images/infrastructure/rotarySection-1.jpeg"
              className="rounded-tl-xl rounded-br-xl"
            />
          </div>
          <div className="lg:w-[50%] lg:flex lg:h-[600px] justify-center">
            <img
              src="/images/infrastructure/rotarySection-2.jpeg"
              alt=""
              className="rounded-tl-xl rounded-br-xl"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-center text-3xl font-semibold uppercase text-[#10572F] italic">
          OFFSET SECTION
        </div>
        <div className="lg:flex lg:gap-20 space-y-10 p-5">
          <div className="lg:w-1/2 flex lg:h-[600px] justify-center">
            <img
              src="/images/infrastructure/offsetSection-2.jpeg"
              className="rounded-tl-xl rounded-br-xl object-cover"
            />
          </div>
          <div className="lg:w-1/2 lg:flex flex-col space-y-10  lg:h-[600px] justify-center">
            <img
              src="/images/infrastructure/offsetSection-1.jpeg"
              className="rounded-tl-xl rounded-br-xl lg:h-[280px] object-cover"
            />
            <img
              src="/images/infrastructure/offsetSection-3.jpeg"
              className="rounded-tl-xl rounded-br-xl lg:h-[280px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="lg:flex lg:gap-20">
          <div className="justify-center lg:w-1/2">
            <div className="text-center text-3xl font-semibold uppercase text-[#10572F] italic">
              LASER DIE SECTION
            </div>
            <div className="flex justify-center lg:h-[600px] p-5">
              <img
                src="/images/infrastructure/laserDieSection.jpeg"
                className="rounded-tl-xl rounded-br-xl"
              />
            </div>
          </div>
          <div className="lg:w-1/2  justify-center">
            <div className="text-center text-3xl font-semibold uppercase text-[#10572F] italic">
              TAG, STICKER DIE CUTTING SECTION
            </div>
            <div className="flex lg:h-[600px] p-5">
              <img
                src="/images/infrastructure/tag,stickerCuttingSection.jpeg"
                alt=""
                className="rounded-tl-xl rounded-br-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-10 mb-5">
        <div className="text-center text-3xl font-semibold uppercase text-[#10572F] italic">
          AUTOMATIC METAL BOX, PHOTO CARD DIE CUT MACHINE
        </div>
        <div className="p-5">
          <div className="flex lg:h-[600px] justify-center">
            <img
              src="/images/infrastructure/metalBoxCuttingMachine.jpeg"
              className="rounded-tl-xl rounded-br-xl"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Infrastructure;
