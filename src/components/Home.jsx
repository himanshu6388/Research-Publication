import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import PublicationsPage from "./PublicationsPage";
import ProgressBar from "./ProgressBar";
import gsap from "gsap";
import PublicationList from "./PublicationList";
import { NavLink , useNavigate} from "react-router-dom";
import  "../css/Home.css";
const Home = ({publications}) => {

  const homeRef = useRef(null);
  const titleRef = useRef(null);
  const titleImgRef = useRef(null);
  const buttonRef = useRef(null);
  const t1 = gsap.timeline();
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userRole, setUserRole] = useState("author"); // 'author' or 'user'
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in and get the user role (author/user)
    const token = localStorage.getItem("authToken"); // Check if the token exists
    const role = localStorage.getItem("role"); // Get the user's role from localStorage

    if (token && role) {
      setIsLoggedIn(true);
      setUserRole(role); // Set user role ('author' or 'user')
    }
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn && userRole === "author") {
      // If logged in and the user is an author, navigate to Submit Journal
      navigate("/submission");
    } else {
      // If not logged in or not an author, navigate to Explore Journal
      navigate("/publicationspage");
    }
  };


useEffect(()=>{
     // Animation for the home element
     gsap.fromTo(
      homeRef.current,
      {
        x: -1200,
        opacity: 0,
        visibility: "hidden",
      },
      {
        x: 0,
        opacity: 1,
        visibility: "visible",
        duration: 0.5,
        delay: 0.2,
        stagger: 0.3,
      }
    );

    gsap.fromTo(
      titleRef.current,
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

    gsap.fromTo(
      titleImgRef.current,
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
      buttonRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.4,
      }
    );
  },[])

  return (
    <div className="bg-img min-h-screen main">
      <ProgressBar/>
      {/* Hero Section */}
      <div className="page1 text-white py-20 text-center min-h-screen flex">
        <div className="p-24 w-[50%]">
          <h1 className="typewriter text-5xl font-bold" ref={homeRef}><span className="text-teal-400">Welcome</span> to Journal</h1>
          <h1 className="typewriter2 text-5xl font-bold" ref={titleRef}>
            Research Publication
          </h1>
          <p className="mt-4 mb-10 text-xl">
            Your gateway to groundbreaking research and publications
          </p>
          {/* explore button */}
          <button
          ref={buttonRef}
          onClick={handleButtonClick}
          className="py-3 px-14 bg-teal-500 font-semibold text-black rounded-full hover:bg-teal-400"
        >
          {isLoggedIn && userRole === "author" ? "Submit Journal" : "Explore Journals"}
        </button>
        </div>
{/* lading page right */}
        <div>
          <div className="images flex items-center justify-center w-full" ref={titleImgRef}>
            <img src="https://static.vecteezy.com/system/resources/previews/023/450/723/non_2x/journal-book-illustration-free-png.png" alt="journal" className="h-[600px]"/>
            {/* <img src="" alt="journal" /> */}
          </div>
        </div>
      </div>
{/* main section of home page  */}
      <main className="p-5">
{/* section 1 */}
        <section className="page2 bg-[#0d0d0d] min-h-screen py-20 text-center">
          <h1 className="text-4xl font-semibold text-white">
          Research Paper Publishing
          </h1>
          <p className="text-2sm text-[#9e9e9e]  pl-80 pr-72 p-20 leading-loose px-24 py-24">
          <h1>JRP (Journal Research Publication) is an open access peer-reviewed international platform where publishing of top quality</h1>
          <h1> and referred papers from highly intellectual scientists and engineers are welcomed. Originality is primarily focused</h1>
          <h1> here. Papers with original research are highly appreciated. Authors can also submit the extended versions of previously</h1>
          <h1> published conference/ research papers. Peer review selection procedure is used to select the papers for publication thus</h1>
          <h1> ensuring the uniqueness, relevance, and readability. The high visibility of published papers to the scientific community</h1>
          <h1> is greatly determined by the wide indexing policy used by IJISRT. that’s why we come in the list of  top paper publishing sites.</h1>

          <h1>This open journal is exceptionally specific which covers all the points that speak to a wide readership of different</h1> <h1>branches of science, engineering and other related fields. The IJISRT has numerous advantages all intended towards</h1> <h1>reinforcing research abilities and propelling academic careers. Academic career advancement is highly influenced by Research Paper Publication.</h1>

         <h1> We ease the scientific research publishing in different branches of M Tech such as Mechanical, Computer Science, </h1>
         <h1>Information Technology, Electrical and Electronics & Communication by facilitating our authors with high class </h1>
         <h1>information, exposure and innovative tools thus enhancing their productivity and ability to take important decisions.
          </h1>
          </p>
          
         <div className="max-w-3xl mx-auto bg-[#1e1e1e]  p-8 rounded-lg">
        <h2 className="text-2xl text-white font-bold mb-6">Why JRP</h2>
        
       
        <ul className="list-disc pl-10 space-y-2 text-[#9e9e9e]">
            <li>Scribd, Google Scholar, Slideshare, Academia, Pubmed (Bibliography) are platforms where you can find IJISRT indexed.</li>
            <li>Looking for Open Access Journal, International, Peer Reviewed platform for paper publication in journals? IJISRT is the right choice.
            </li>

            
            <li className="ml-0">Simple and speedy paper publishing processing.</li>
            <li className="ml-0">Each author is provided with an individual eCertificate.</li>

            <li>Promotes your articles along with increasing their visibility by providing an Open Access Journal Database.</li>
            <li>Online submission facilitates authors to submit their papers anytime, anywhere.</li>
            <li>Register and get your paper published in the current issue.</li>
            <li>Research and technical papers are accepted based on originality and quality.</li>
            <li>"Any time download of full-length paper" is available to authors.</li>
            <li>24 hours is the maximum time to resolve author queries.</li>
        </ul>

        
        <p className="mt-6 font-bold text-teal-600 text-center">
            So <span className="underline">Call for Papers in Journals</span> now!
        </p>
    </div>

          
        </section>

{/* Research Paper Box */}
          <section className=" min-h-screen mb-5">
            <div className="max-w-4xl mx-auto p-6 bg-[#1e1e1e] shadow-lg rounded-lg mb-5">
              <h3 className="text-2xl font-semibold text-[#9e9e9e]">
                Understanding Quantum Computing
              </h3>
              <p className="text-gray-600 mt-2">
                By: John Doe | Published: January 2025
              </p>
              <p className="text-gray-700 mt-4">
                Quantum computing is an emerging field that holds the promise of
                revolutionizing industries such as cryptography, machine
                learning, and more. This paper explores the fundamental
                principles and potential applications of quantum computers.
              </p>
              <button className="mt-6 px-4 py-2 bg-teal-600 text-black rounded-md hover:bg-teal-700">
                Read Full Paper
              </button>
            </div>
         
          
            <div className="max-w-4xl mx-auto p-6 bg-[#1e1e1e] shadow-lg rounded-lg mb-5">
              <h3 className="text-2xl font-semibold text-[#9e9e9e]">
                AI in Modern Healthcare
              </h3>
              <p className="text-gray-600 mt-2">
                By: Jane Smith | Published: December 2024
              </p>
              <p className="text-gray-700 mt-4">
                Artificial intelligence is transforming healthcare, from early
                diagnosis to personalized treatment. This paper investigates the
                latest AI technologies shaping modern healthcare.
              </p>
              <button className="mt-6 px-4 py-2 bg-teal-600 text-black rounded-md hover:bg-teal-700">
                Read Full Paper
              </button>
            </div>
         

            <div className="max-w-4xl mx-auto p-6 bg-[#1e1e1e] shadow-lg rounded-lg mb-10">
              <h3 className="text-2xl font-semibold text-[#9e9e9e]">
                AI in Modern Healthcare
              </h3>
              <p className="text-gray-600 mt-2">
                By: Jane Smith | Published: December 2024
              </p>
              <p className="text-gray-700 mt-4">
                Artificial intelligence is transforming healthcare, from early
                diagnosis to personalized treatment. This paper investigates the
                latest AI technologies shaping modern healthcare.
              </p>
              <button className="mt-6 px-4 py-2 bg-teal-600 text-black rounded-md hover:bg-teal-700">
                Read Full Paper
              </button>
            </div>
          </section>

      </main>

      <Footer/>
    </div>
  );
};

export default Home;
