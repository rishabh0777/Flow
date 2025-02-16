import React from 'react';
import Category from './Category';
import ItemCard from './ItemCard';

const Home = () => {
  return (
    <>
      {/* Main Container */}
      <div className="absolute top-0 left-0 w-screen min-h-screen bg-opacity-50 flex flex-col items-center">
        
        {/* Hero Section */}
        <div className="w-[90%] h-[60vh] relative bg-[#ddd] rounded-lg shadow-lg mt-20 mx-auto">
          {/* Add content like a hero image or promotional content here */}
        </div>
        
        {/* Main Content Section */}
        <div className="w-[90%] min-h-[70vh] relative mt-10 mx-auto flex gap-5">
          
          {/* Sidebar Section */}
          <div className="sidebar w-[20%] h-full flex flex-col items-center gap-5 sticky top-5">
            {/* Render categories */}
            <Category />
            <Category />
            <Category />
            <Category />
          </div>
          
          {/* Items Section */}
          <div className="w-[80%] flex flex-col">
            
            {/* Section Header */}
            <h2 className="font-bold font-poppins text-xl sticky top-0 bg-white z-10">
              New Arrivals
            </h2>
            <p className="text-[1vw] border-b-2 border-[#ddd] pb-1 w-[5.5vw] mt-2">
              View more
            </p>
            
            {/* Filters Section */}
            <div className="filters flex justify-between w-full mt-5 text-[1vw] bg-white-10/5 backdrop-blur-lg py-2">
              {/* Individual Filter Buttons */}
              <div className="px-2 py-1 w-[10vw] border bg-[#ddd] border-gray-200 rounded-lg cursor-pointer ml-4">
                <i className="ri-sort-asc mr-1"></i>
                Sort
              </div>
              <div className="px-2 py-1 w-[10vw] border bg-[#ddd] border-gray-200 rounded-lg cursor-pointer flex justify-between">
                Colour
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <div className="px-2 py-1 w-[10vw] border bg-[#ddd] border-gray-200 rounded-lg cursor-pointer flex justify-between">
                Season
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <div className="px-2 py-1 w-[10vw] border bg-[#ddd] border-gray-200 rounded-lg cursor-pointer flex justify-between">
                Purpose
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <div className="px-2 py-1 w-[10vw] border bg-[#ddd] border-gray-200 rounded-lg cursor-pointer flex justify-between">
                Style
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <div className="px-2 py-1 w-[10vw] border bg-[#ddd] border-gray-200 rounded-lg cursor-pointer flex justify-between">
                Material
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <div className="bg-zinc-900 px-3 text-sm flex justify-center items-center rounded-lg text-white">
                <i className="ri-list-check rotate-180"></i>
              </div>
            </div>
            
            {/* Scrollable Items Section */}
            <div
              className="w-full h-[calc(77vh-50px)] overflow-y-scroll grid grid-cols-3 gap-4 p-5"
              onWheel={(e) => {
                // Prevent scrolling the parent page when this section is scrolled
                e.stopPropagation();
              }}
            >
              {/* Render individual item cards */}
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
