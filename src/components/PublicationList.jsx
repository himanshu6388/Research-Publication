import React from "react"; // Import React
import PublicationsPage from "./PublicationsPage";
import ProgressBar from "./ProgressBar";


const PublicationList = ({ publications }) => { // PublicationList component
  console.log("Publications:", publications);
  return (
    <>
    <ProgressBar/>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6"> 
   
      {/* Grid layout: single column on small screens, 2 columns on medium screens, 3 columns on large screens */}
      
      {publications.map((pub) => ( // Loop through each publication
        <div
          key={pub.id} // Unique identifier for each publication
          className="cursor-pointer  hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-[#1e1e1e] shadow-lg rounded-lg overflow-hidden " 
          // Card style with shadow, rounded corners, border, hover effect
        >
          {/* Image of the publication */}
          <img
            src={pub.image || "default-image.jpg"} // Display image or use a default image
            alt={pub.title} // Title as the alt text for the image
            className="w-full h-48 object-cover" // Tailwind classes to make the image cover the area
          />

          <div className="p-6"> {/* Padding around the text */}
            <h3 className="text-xl font-semibold text-white truncate">{pub.title}</h3>
            {/* Publication Title */}

            <p className="text-teal-600 mt-2 text-sm">{pub.authors}</p>
            {/* Author names */}

            <p className="text-teal-700 mt-4 text-base truncate">
              {pub.abstract}
            </p>
            {/* Abstract of the publication */}

            <div className="mt-4 flex justify-between items-center"> 
              {/* Flexbox to space out the buttons */}
              <a
                href={`/publications/${pub.id}`} 
                className="text-white hover:text-teal-800 font-medium"
              >
                Read More
              </a>
              <button
                onClick={() => window.open(pub.pdfLink, "_blank")}
                className="bg-teal-500 text-black px-4 py-2 rounded-md hover:bg-teal-700 transition"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default PublicationList;
