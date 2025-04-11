import React from "react";
import PublicationList from "./PublicationList";
import Footer from "./Footer";
import '../css/Home.css';
const publications = [
  {
    id: 1,
    title: "Breaking New Ground in Research",
    authors: "John Doe, Jane Smith",
    abstract: "This study explores new methods for advancing research in the field of computer science. The results promise to change how we approach machine learning.",
    pdfLink: "https://example.com/publication1.pdf",
    image: "https://images.pexels.com/photos/1156683/pexels-photo-1156683.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Understanding Quantum Computing",
    authors: "Alice Johnson, Bob Lee",
    abstract: "An introduction to quantum computing and its potential to revolutionize the tech industry. This paper examines the principles behind quantum mechanics and computation.",
    pdfLink: "https://example.com/publication2.pdf",
    image: "https://images.pexels.com/photos/6980355/pexels-photo-6980355.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Understanding Quantum Computing",
    authors: "Alice Johnson, Bob Lee",
    abstract: "An introduction to quantum computing and its potential to revolutionize the tech industry. This paper examines the principles behind quantum mechanics and computation.",
    pdfLink: "https://example.com/publication2.pdf",
    image: "https://images.pexels.com/photos/1156683/pexels-photo-1156683.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Understanding Quantum Computing",
    authors: "Alice Johnson, Bob Lee",
    abstract: "An introduction to quantum computing and its potential to revolutionize the tech industry. This paper examines the principles behind quantum mechanics and computation.",
    pdfLink: "https://example.com/publication2.pdf",
    image: "https://images.pexels.com/photos/811572/pexels-photo-811572.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Understanding Quantum Computing",
    authors: "Alice Johnson, Bob Lee",
    abstract: "An introduction to quantum computing and its potential to revolutionize the tech industry. This paper examines the principles behind quantum mechanics and computation.",
    pdfLink: "https://example.com/publication2.pdf",
    image: "https://images.pexels.com/photos/4476376/pexels-photo-4476376.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Understanding Quantum Computing",
    authors: "Alice Johnson, Bob Lee",
    abstract: "An introduction to quantum computing and its potential to revolutionize the tech industry. This paper examines the principles behind quantum mechanics and computation.",
    pdfLink: "https://example.com/publication2.pdf",
    image: "https://images.pexels.com/photos/5984613/pexels-photo-5984613.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Understanding Quantum Computing",
    authors: "Alice Johnson, Bob Lee",
    abstract: "An introduction to quantum computing and its potential to revolutionize the tech industry. This paper examines the principles behind quantum mechanics and computation.",
    pdfLink: "https://example.com/publication2.pdf",
    image: "https://images.pexels.com/photos/891059/pexels-photo-891059.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  // Add more publications here
];

const PublicationsPage = () => {
  return (
    <div className=" min-h-screen">
    <div className="container mx-auto p-8 ">
      <h1 className="text-4xl font-bold text-center text-white mb-8 ">
        Latest Publications
      </h1>
      <PublicationList publications={publications} />
    </div>
    <Footer/>
    </div>
  );
};

export default PublicationsPage;
