const AboutUs = () => {
  return (
    <div>
      <div>
        <img src="/images/BannersImg/aboutUs.jpg" className="w-full " />
      </div>
      <div className="bg-[#EBF7ED] py-10 px-5">
        <h1 className="text-center font-bold text-3xl  text-[#10572F]">
          About Us
        </h1>
        <p className="text-center font-medium text-xl leading-10 ">
          We are experience in the printing field Since 1977.
          <br />
          We are always buy only Oeko tex certified Dies, Roll Material Satin &
          Taffetta.
          <br />
          We are making the label block ultra sonic process material plate use
          the printing for PHD & Fastness purpose.
          <br />
          We use the FSC Certified board, Recycled Board Tested Stickers &
          Coated inner Board, Tissue Papers, Papers Purchase from direct dealer
          for quality purpose.
          <br />
          Label Printed & filter the mistake, cutting and final check the pack
          per day capacity double side print with cutting 3.5 Lakhs, Center fold
          long length label 2 Lakhs per day <br />
          Size Tag printed die cut with check the pack 2 Lakhs per day
          <br />
          Photo Card, Metal Box depends upon the size capacity Our factory
          approved the audit from (OEKO TEX STANDARD 100) office.
        </p>
      </div>
      <div className="lg:flex items-center my-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/BannersImg/Certificate.png"
            alt=""
            className="max-w-[60%] h-auto object-contain"
          />
        </div>
        <div className="w-full lg:w-1/2 p-5">
          <h1 className="text-center font-bold text-2xl mt-10 text-[#10572F]">
            Why Choose us
          </h1>
          <p className=" text-base font-medium leading-7 text-gray-800 mt-5">
            We specialize in manufacturing and supplying a wide range of garment
            labels available in different colors, sizes, and shapes — from
            concept design to the finished product.
            <br />
            We are committed to producing eco-friendly products that support
            sustainable practices.
            <br />
            Our expertise covers polyester and cotton labels, tapes, and a
            variety of weaving textures. We print on a wide range of fibers,
            including polyester (satins, taffetas & acetates), nylon,
            poly-cotton blends, as well as natural fibers such as cotton and
            organic cotton.
            <br />
            All our products are certified under{" "}
            <span className="font-semibold text-[#10572F]">
              OEKO-TEX® STANDARD 100
            </span>
            , ensuring they are safe, environmentally friendly, and tested
            against harmful substances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
