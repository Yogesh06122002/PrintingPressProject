import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#00A183] py-10 lg:flex lg:justify-around items-center">
      <div>
        <div className="flex justify-center gap-10 items-center">
          <div className="">
            <Link to="/">
              <img
                src="/images/BannersImg/Sree Kalai Printing Press Logo.png"
                alt="Sree Kalai Printing Press Logo"
                className="w-[6rem]"
              />
            </Link>
          </div>
          <div className="flex gap-1">
            <img
              src="/images/BannersImg/oeko tex.jpg"
              alt="oeko tex"
              className="w-17 h-15"
            />
          </div>
        </div>
        {/* <div className="flex gap-4  mt-5  justify-center">
          <button className="border-[1px] p-1 border-white text-white cursor-pointer  rounded-full  hover:bg-white hover:text-[#00A183]">
            <FaFacebookF className="text-xl" />
          </button>
          <button className="border-[1px] p-1 border-white text-white cursor-pointer  border-[#23272B] rounded-full hover:bg-white hover:text-[#00A183]">
            <FaInstagram className="text-xl" />
          </button>
          <button className="border-[1px] p-1 border-white text-white cursor-pointer  border-[#23272B] rounded-full hover:bg-white hover:text-[#00A183]">
            <FaYoutube className="text-xl" />
          </button>
        </div> */}
      </div>
      <div className="text-white m-5 lg:m-0">
        <div className="font-bold text-2xl tracking-wide italic  ">
          Services
        </div>
        <div>Offset</div>
        <div>Screen</div>
        <div>Letter Press</div>
        <div>Label</div>
        <div>Inner Board</div>
      </div>
      <div className="text-white mx-5 lg:mx-0">
        <div className="font-bold text-2xl tracking-wide italic">
          Contact Us
        </div>
        <div>
          <span className="font-semibold">Address</span> : 46,S.N.V.S Compound,
          <br />
          Kongu Main Road,Tirupur - 7.
        </div>
        <div>
          <span className="font-semibold">GSTIN No</span> : 33AEFPV0162B1ZZ
        </div>
        <div>
          <span className="font-semibold">E-mail : </span>{" "}
          <a href="mailto:kalaiprinting@gmail.com" className="hover:underline">
            kalaiprinting@gmail.com
          </a>
        </div>
        <div>
          <span className="font-semibold">Call : </span>{" "}
          <a href="tel:9361011583" className="hover:underline">
            9361011583
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
