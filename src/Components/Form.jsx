import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";

const Form = () => {
  return (
    <div className="w-full min-h-[717px] bg-[#8D8D8D]/10 pt-12 relative">
      <div className="absolute top-0">
        <img src="circle.svg" alt="" className="" />

      </div>
      {/* Heading Section */}
      <div className="w-full h-auto mx-auto text-center mb-12 px-4">
        <h1 className="font-normal text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          More Questions About Grocery Essential Goods Delivery <br /> Solution
        </h1>
        <p className="text-base mt-2 md:text-lg lg:text-xl xl:text-2xl">
          Let&apos;s Start the Conversation
        </p>
      </div>

      {/* Main Form Section */}
      <div className="flex flex-col lg:flex-row justify-center max-w-[1380px] mx-auto mt-6 rounded-xl">
        {/* Left Section */}
        <div className="bg-[#2B2B2B] relative text-white lg:w-[35rem] w-full py-8 px-6 lg:px-8 space-y-8 flex flex-col justify-start items-start rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl">
          <div className="w-full absolute left-[32rem] bottom-0 md:left-[22rem]">
            <img src="circle.svg" alt="" className="w-[225px] h-[223px] object-cover" />
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold">Connect with us</h1>

          <div className="w-full flex items-center space-x-4 text-base lg:text-lg">
            <Phone />
            <p>+977-12344567890, +977-12344567890</p>
          </div>
          <div className="w-full flex items-center space-x-4 text-base lg:text-lg">
            <Mail />
            <p>enquiry@webstudionepal.com</p>
          </div>
          <div className="w-full flex items-center space-x-4 text-base lg:text-lg">
            <MapPin />
            <p>Sajha Basti, Baneshwor, Kathmandu, Nepal</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white w-full lg:w-1/2 px-6 lg:px-16 py-8 lg:py-12 rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl">
          <div className="w-full h-auto text-[#8D8D8D]">
            <form action="#">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6">
                {/* Input Fields */}
                <label className="flex flex-col">
                  Name
                  <input
                    type="text"
                    className="border-0 border-b-2 focus:outline-none focus:border-b-black"
                  />
                </label>
                <label className="flex flex-col">
                  Email
                  <input
                    type="email"
                    className="border-0 border-b-2 focus:outline-none focus:border-b-black"
                  />
                </label>

                <label className="flex flex-col">
                  Country
                  <input
                    type="text"
                    className="border-0 border-b-2 focus:outline-none focus:border-b-black"
                  />
                </label>
                <label className="flex flex-col">
                  Phone Number
                  <input
                    type="number"
                    className="border-0 border-b-2 focus:outline-none focus:border-b-black"
                  />
                </label>

                <label className="col-span-full flex flex-col">
                  Message
                  <textarea
                    placeholder="Write your message"
                    className="border-0 border-b-2 pt-4 focus:outline-none focus:border-b-black"
                  ></textarea>
                </label>
              </div>
              <div className="flex justify-end mt-4">
                <button className="px-6 py-2 bg-black text-white rounded hover:bg-sky-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
