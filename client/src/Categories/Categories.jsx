import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className="home-container px-[4%] py-14">
        <div className="container">
          <div className="grid-container">
            <div className="featured grid-one">
              <Link to={"/category/1"}>
                <div id="img1" className="all lil-overlay"></div>
              </Link>
              <img
                src={
                  "https://images.unsplash.com/photo-1618453292459-53424b66bb6a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="img1"
              />
              <Link to={"/category/1"}>
                <p className="absolute text-white bottom-8 left-8 text-2xl sm:text-4xl font-semibold">Clothes</p>
              </Link>
            </div>
            <div className="featured grid-two">
              <Link to={"/category/2"}>
                <div id="img2" className="lil-overlay"></div>
              </Link>
              <img
                src={
                  "https://img.freepik.com/premium-psd/woman-with-headphones-her-head-listening-music_176841-36707.jpg"
                }
                alt="img2"
              />
              <Link to={"/category/2"}>
                <p className="absolute text-white bottom-8 left-8 text-2xl sm:text-4xl font-semibold">Electronics</p>
              </Link>
            </div>
            <div className="featured grid-four">
              <Link to={"/category/3"}>
                <div id="img3" className="lil-overlay"></div>
              </Link>
              <img
                src={
                  "https://img.freepik.com/free-photo/picture-frame-with-abstract-art-by-pink-velvet-armchair_53876-128125.jpg?t=st=1716638751~exp=1716642351~hmac=2160cc89aa18771609dc34f555d4139cd039889da304d382561e8a551115237a&w=360"
                }
                alt="img3"
              />
              <Link to={"/category/3"}>
                <p className="absolute text-white bottom-8 left-8 text-2xl sm:text-4xl font-semibold">Furniture</p>
              </Link>
            </div>
            <div className="featured grid-four-low">
              <Link to={"/category/4"}>
                <div id="img4" className="lil-overlay"></div>
              </Link>
              <img
                src={
                  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNuZWFrZXJzfGVufDB8fDB8fHww"
                }
                alt="img4"
              />
              <Link to={"/category/4"}>
                <p className="absolute text-white bottom-8 left-8 text-2xl sm:text-4xl font-semibold">Sneakers</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
