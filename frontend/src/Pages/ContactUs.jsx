import { FaUser } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div>
      <div>
        <img src="/public/images/BannersImg/ContactUs.jpg" className="w-full" />
      </div>
      <div className="lg:flex items-center gap-10 m-10">
        <div className="w-full lg:w-1/2 space-y-5">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <div className="flex justify-between items-center lg:w-[35%] w-[55%]">
            <FaUser className="bg-[#00A183] text-white p-1 text-4xl rounded-full" />
            <div>
              <h1 className="text-[#00A183] font-medium text-lg">Director</h1>
              <p className="text-gray-500 font-medium">
                Call : +91 93610 11583
              </p>
            </div>
          </div>
          <div className="flex  justify-between items-center lg:w-[48%] w-[76%]">
            <HiMiniUserGroup className="bg-[#00A183] text-white p-1 text-4xl rounded-full" />
            <div>
              <h1 className="text-[#00A183] font-medium text-lg">
                Auditor / Manager Marketing
              </h1>
              <p className="text-gray-500 font-medium">
                J.Parthiban : +91 91502 06816
              </p>
            </div>
          </div>
          <div className="flex  justify-between items-center lg:w-[44%] w-[70%]">
            <FaLocationDot className="bg-[#00A183] text-white p-1 text-4xl rounded-full" />
            <div>
              <h1 className="text-[#00A183] font-medium text-lg">Address</h1>
              <p className="text-gray-500 font-medium">
                46,S.N.V.S Compound, <br />
                Kongu Main Road,Tirupur - 7.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center lg:w-[39%] w-[62%]">
            <MdEmail className="bg-[#00A183] text-white p-1 text-4xl rounded-full" />
            <div>
              <h1 className="text-[#00A183] font-medium text-lg">
                Drop us an Email
              </h1>
              <p className="text-gray-500 font-medium">
                kalaiprinting@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:mt-0 mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.934908046041!2d77.34782007482202!3d11.118225852796622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b4bae99b03%3A0x3fe7fd7f6ae73a93!2sSNVS%20Compound%2C%20124%2C%20Kongu%20Main%20Rd%2C%20near%20Dhanalakshmi%20Theatre%2C%20NRK%20Puram%2C%20Renganatha%20Puram%2C%20Tiruppur%2C%20Tamil%20Nadu%20641607!5e0!3m2!1sen!2sin!4v1755847688717!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
