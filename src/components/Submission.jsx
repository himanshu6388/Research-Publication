import React, { useRef, useState , useEffect } from "react";
import Footer from "./Footer";
import ProgressBar from "./ProgressBar";
import { gsap } from "gsap";

const Submission = () => {
  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    abstract: "",
    pdf: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "pdf") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log(formData);
    setSubmitted(true);
  };

  const imgRef = useRef(null);
  const img2Ref = useRef(null);
  const formRef  = useRef(null);

  useEffect(()=> {
    gsap.fromTo(
          imgRef.current,
          {
            x: 500,
            opacity: 0,
            visibility: "hidden",
          },
          {
            x: 0,
            opacity: 1,
            visibility: "visible",
            duration: 0.4,
            delay: 0.2,
            stagger: 0.3,
          }   
  );
  gsap.fromTo(
        img2Ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          delay: 0.4,
        }
      );
      gsap.fromTo(
        formRef.current,
        {
          x: -1200,
          opacity: 1,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.2,
          stagger: 0.3,
        }
      );
  
} ,[])

  return (
    <>
    <ProgressBar/>
    <div className="min-h-screen ">
      {/* Section 1: Introduction */}
      <section className=" text-white py-1">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl mt-4 font-bold">Research Submission</h1>
          <p className="mt-4 text-lg">
            Submit your research paper for publication in our journal.
          </p>
        </div>
      </section>

      {/* Section 2: Submission Form */}
      <section className="">
        <div className=" bg-transparent mx-auto px-6 w-[45%]" ref={formRef}>
          {/* <h2 className="text-2xl font-bold mb-2 text-white">Submission Form</h2> */}
          {!submitted ? (
            <form
              className=" shadow-md rounded-lg p-8"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-[#9e9e9e] font-bold mb-2"
                >
                  Research Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full  p-2 cursor-text text-white   bg-[#2e2d2d] rounded-md  border-none  focus:outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="authors"
                  className="block text-[#9e9e9e] font-bold mb-2"
                >
                  Authors
                </label>
                <input
                  type="text"
                  id="authors"
                  name="authors"
                  value={formData.authors}
                  onChange={handleChange}
                  className="w-full border-gray-300  p-2 text-white   bg-[#2e2d2d] rounded-md  border-none  focus:outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="abstract"
                  className="block text-[#9e9e9e] font-bold mb-2"
                >
                  Abstract
                </label>
                <textarea
                  id="abstract"
                  name="abstract"
                  value={formData.abstract}
                  onChange={handleChange}
                  className="w-full h-16 p-2 text-white   bg-[#2e2d2d] rounded-md  border-none  focus:outline-none"
                  rows="5"
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="pdf"
                  className="block text-[#9e9e9e] font-bold mb-2"
                >
                  Upload PDF
                </label>
                <input
                  type="file"
                  id="pdf"
                  name="pdf"
                  onChange={handleChange}
                  className="w-full bg-[#2e2d2d] border-none text-[#9e9e9e] rounded-lg p-2"
                  accept=".pdf"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-[#24cfa6] text-black px-6 py-2 rounded-lg hover:bg-teal-400"
              >
                Submit
              </button>
            </form>
          ) : (
            <p className="text-green-600 font-bold text-lg">
              Thank you for your submission!
            </p>
          )}
        </div>
        {/*form  right side  */}
        <div className=" flex items-center justify-center  mx-auto px-6 h-32 w-[45%]">
             
             
          </div>
      </section>

      {/* Section 3: Confirmation */}
      {submitted && (
        <section className="bg-green-500 text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold">Submission Successful</h2>
            <p className="mt-4">
              We have received your research paper. You will hear from us soon!
            </p>
          </div>
       
        </section>
      )}
    </div>

    <Footer/>
    </>
  );
};

export default Submission;
