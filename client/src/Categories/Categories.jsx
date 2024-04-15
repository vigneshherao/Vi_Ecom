import React from "react";

const Categories = () => {
  return (
    <>
      <div className="home-container px-[4%] py-14">
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <div id="img1" className="all lil-overlay"></div>
              <img
                src={
                  "https://images.unsplash.com/photo-1618453292459-53424b66bb6a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="img1"
              />
              <p className="absolute text-white bottom-8 left-8 text-2xl sm:text-4xl font-semibold">Clothes</p>
            </div>
            <div className="featured grid-two">
              <div id="img2" className="lil-overlay"></div>
              <img
                src={
                  "https://i0.wp.com/soundzstore.com/wp-content/uploads/2020/12/Favicon.png?fit=819%2C1024&ssl=1"
                }
                alt="img2"
              />
              <p className="absolute text-white bottom-8 left-8 text-2xl sm:text-4xl font-semibold">Electronics</p>
            </div>
            <div className="featured grid-four">
              <div id="img3" className="lil-overlay"></div>
              <img
                src={
                  "https://images4.alphacoders.com/260/260758.jpg"
                }
                alt="img3"
              />
              <p className="absolute text-white bottom-8 left-8 text-2xl sm:text-4xl font-semibold">Furniture</p>
            </div>
            <div className="featured grid-four-low">
              <div id="img4" className="lil-overlay"></div>
              <img
                src={
                  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNuZWFrZXJzfGVufDB8fDB8fHww"
                }
                alt="img4"
              />
              <p className="absolute text-white bottom-8 left-8 text-2xl sm:text-4xl font-semibold">Sneakers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
