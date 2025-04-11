import React, { useEffect, useState , useRef} from "react";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";
import LoginBtn from "./LoginBtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuRef = useRef(null);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const t1 = gsap.timeline();

  useEffect(() => {
    // Check if the animation hasn't already run
     gsap.fromTo(
         navRef.current,
         {
           y: -50,
           delay:0.2,
           opacity: 0,
           visibility: "hidden",
         },
         {
           y: 0,
           opacity: 1,
           visibility: "visible",
           duration: 0.4,
           delay: 0.2,
           stagger: 0.3,
         }
       );
       gsap.fromTo(
        logoRef.current,
        {
          y: -50,
          opacity: 0,
          visibility: "hidden",
        },
        {
          y: 0,
          opacity: 1,
          visibility: "visible",
          duration: 0.5,
          delay: 0.2,
          stagger: 0.3,
        }
      );
  }, []);

  useEffect(() => {
    // Apply wavy animation using GSAP and repeat 5 times
    const items = document.querySelectorAll(".wavy");

    items.forEach((item, index) => {
      gsap.to(item, {
        x: index % 2 === 0 ? 10 : -10,  // Alternate movement (left and right)
        rotation: index % 2 === 0 ? 5 : -5,  // Alternate rotation
        duration: 0.5,
        yoyo: true, // Makes the animation go back and forth
        repeat: 5, // Repeat 4 more times (total of 5)
        ease: "power1.inOut",
        delay: index * 0.2,  // Stagger the animation to create a wave effect
      });
    });
  }, []);

  
  return (
    <nav className="text-white ">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <div className="flex items-center mt-3 wavy" ref={logoRef}  >
            <img src="https://gihsm.goel.edu.in/wp-content/uploads/2022/04/cropped-GIHSM-Small.png" alt="" className="h-10 w-10 mr-3" />
            <a href="/" className="text-2xl font-bold">Journal <span className="text-teal-500">Publication</span></a>
          </div>

          <div className="navlist hidden md:flex space-x-6 mt-3" ref={navRef} >
            {/* <a href="/" className="hover:text-yellow-400">Home</a> */}
            <NavLink to="/" className="wavy">
             {(e)=>{
                return(
                    <span
                     className={[ "wiggle hover:text-[#BE524B]",
                        e.isActive?"text-[#BE524B]":"",
                        e.isActive?"font-bold":"" 
                     ].join(" ")}
                    >Home</span>
                )
              }}
          </NavLink> 
            {/* <a href="/about" className="hover:text-yellow-400">Publicatino List</a> */}
            <NavLink to="/publicationspage" className="wavy">
             {(e)=>{
                return(
                    <span
                     className={[
                        "wiggle hover:text-[#BE524B]",
                        e.isActive?"text-[#BE524B]":"",
                        e.isActive?"font-bold":""
                     ].join(" ")}
                    >Publication List</span>
                )
              }}
          </NavLink> 

            {/* <a href="/journals" className="hover:text-yellow-400">Submission</a> */}
            <NavLink to="/submission" className="wavy">
             {(e)=>{
                return(
                    <span
                     className={[
                        "wiggle hover:text-[#BE524B]",
                        e.isActive?"text-[#BE524B]":"",
                        e.isActive?"font-bold":""
                     ].join(" ")}
                    >Submission</span>
                )
              }}
          </NavLink> 

            {/* <a href="/contact" className="hover:text-yellow-400">Contact</a> */}
            <NavLink to="/contact" className="wavy">
             {(e)=>{
                return(
                    <span
                     className={[
                        "wiggle hover:text-[#BE524B]",
                        e.isActive?"text-[#BE524B]":"",
                        e.isActive?"font-bold":""
                     ].join(" ")}
                    >Contact</span>
                )
              }}
          </NavLink> 
          </div>
          

          <div className="hidden md:block">
            {/* <button className=" py-2 rounded hover:text-yellow-400 hover:font-semibold underline underline-offset-8 decoration-yellow-400 decoration-2 decoration-wavy  hover:decoration-dashed ">Login</button> */}
            {/* login button */}
            <LoginBtn/>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</NavLink>
            <NavLink href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Submission</NavLink>
            <NavLink href="/journals" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Journals</NavLink>
            <NavLink href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</NavLink>
            <button className="w-full bg-teal-600 px-4 py-2 rounded hover:bg-teal-500">Login</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
