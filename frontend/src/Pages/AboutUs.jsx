const AboutUs = () => {
  return (
    <div>
      <div>
        <img src="/images/BannersImg/AboutUsOwner.jpeg" className="w-full " />
      </div>
      <div className="bg-[#EBF7ED] py-10 px-5">
        <h1 className="text-center font-bold text-3xl  text-[#10572F]">
          About Us
        </h1>
        <ul className="text-left font-medium text-xl leading-10 max-w-4xl mx-auto  list-disc list-outside pl-6">
          <li>
            We are experienced in the printing field{" "}
            <span className="text-red-600">since 1977.</span>
          </li>
          <li>
            We always buy only Oeko Tex certified dyes, roll material satin &
            taffeta.
          </li>
          <li>
            We make label blocks using ultrasonic process material plates for{" "}
            <span className="text-green-700">PHD & fastness</span> purpose.
          </li>
          <li>
            We use the <span className="text-red-600">FSC</span> certified
            Board,<span className="text-red-600">Recycled</span> board,
            <span className="text-red-600">Tested</span> stickers & coated inner
            board, tissue papers, and papers purchased directly from dealers for
            quality assurance.
          </li>
          <li>
            Label printing includes mistake filtering, cutting, and final
            checks. Daily capacity: 3.5 lakhs double-side print with cutting.
          </li>
          <li>Center fold long length label capacity: 2 lakhs per day.</li>
          <li>
            Size tags printed, die cut, checked, and packed: 2 lakhs per day.
          </li>
          <li>
            Photo cards and metal box production depend upon size capacity.
          </li>
          <li>
            Our factory is approved by audit from OEKO TEX STANDARD 100 office.
          </li>
        </ul>
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
          <p className=" text-xl font-medium leading-10 text-gray-800 mt-5">
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
