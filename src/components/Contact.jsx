import React from "react";
import Footer from "./Footer";
import ProgressBar from "./ProgressBar";

function Contact() {
  return (
    <>
    <ProgressBar/>
    <div className="mx-auto">
      {/* Header */}
      <div className="text-center h-20 mt-5">
        <h1 className="text-3xl font-bold text-white">We'd Love To Hear From You!</h1>
        <p className="text-white">
          Thank you for visiting our website. If you want to reach us, you can email us at{" "}
          <a href="mailto:editor@ijisrt.com" className="text-teal-600 underline">
           www.goel.edu.in
          </a>
          .
        </p>
      </div>

      {/* Grid for Form and Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className=" p-8 ">
          <h2 className="text-2xl font-semibold text-[#9e9e9e] mb-4">Questioning and Query Form</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-[#9e9e9e]">Your Name (Required)</label>
              <input
                type="text"
                className="w-full p-2 cursor-text text-white   bg-[#1D1D1D] rounded-md  border-none  focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-[#9e9e9e]">Your Email (Required)</label>
              <input
                type="email"
                className="w-full p-2 cursor-text text-white   bg-[#1D1D1D] rounded-md  border-none  focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-[#9e9e9e]">Subject</label>
              <input
                type="text"
                className="w-full p-2 cursor-text text-white   bg-[#1D1D1D] rounded-md  border-none  focus:outline-none"
                placeholder="Enter the subject"
              />
            </div>

            <div>
              <label className="block text-[#9e9e9e]">Message</label>
              <textarea
                className="w-full p-2 cursor-text text-white   bg-[#1D1D1D] rounded-md  border-none  focus:outline-none"
                placeholder="Enter your message"
                rows="3"
              ></textarea>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="mr-2 " />
              <label className="text-[#9e9e9e]">I'm not a robot</label>
            </div>

            <button
              type="submit"
              className="w-[200px] bg-teal-500 text-black py-2 px-4 rounded hover:bg-teal-700"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-[#9e9e9e] mb-4">
            Journal Research Publication
          </h2>
          <p className="text-white">Arun Singh Yadav (Professor)</p>
          <p className="mt-4 text-teal-600">
            <span className="font-semibold text-white">Address:</span> GIHSM , Lucknow, Uttar Pardesh, India-302020
          </p>
          <p>
            <span className="font-semibold text-white">Email:</span> <a href="mailto:editor@ijisrt.com" className="text-teal-600 underline">goel@jrp.in</a>, <a href="mailto:query.ijisrt@gmail.com" className="text-teal-600 underline">query.jrp@gmail.com</a>
          </p>
          <p>
            <span className="font-semibold text-white">Web page:</span>{" "}
            <a href="https://www.ijisrt.com" className="text-teal-600 underline">www.jrp.com</a>
          </p>
          <p>
            <span className="text-white font-semibold">Phone:</span> +91-9745038475
          </p>

          <div className="mt-10 p-4 bg-yellow-100 text-yellow-700 rounded-lg">
            <p>
              Authors can discuss queries by live chat support system.
            </p>
            <p className="mt-2 font-semibold">Online Chat Support:</p>
            <p>Mon - Sat (11:30 AM to 2:00 PM according to India Standard Time)</p>
            <p className="mt-2 text-sm">
              For any Query or Questioning please follow given email ID or query form. Contact number will not be used for questioning or queries.
            </p>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
}

export default Contact;
