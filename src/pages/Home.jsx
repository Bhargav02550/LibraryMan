import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import Money from "../assets/images/Money.jpg";
import OOPS from "../assets/images/OOPS.png";
import Spring from "../assets/images/Spring.png";
import Refactor from "../assets/images/Refactor.png";
import Programmer from "../assets/images/Programmer.png";
import HomeSearch from "../components/HomeSearch";
import "../assets/styles/Home.css";

import Hero from "../components/Hero.jsx";
import Gitashlok from "../components/Gitashlok.jsx";
import Bottombar from "../components/Bottombar.jsx";
import SerachAndChoose from "../components/SearchAndChoose.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeSearch />
      <SerachAndChoose />

      {/* Vidya Dadati Vinayam (Knowledge gives humility) - Chapter 4, Verse 39
        Na Hi Jnanena Sadrisham (There is nothing equal to knowledge.) Chapter: 4 Verse: 39
    */}

      <hr className="home-hr" />

      <div className="div-featured">
        <h1>Featured Books</h1>
      </div>
      <div className="div-recommend">
        <h1>We Recommend</h1>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="img-box">
            <img src={Money} alt="Money" loading="lazy" decoding="async" />
          </div>
          <div className="text-box">
            <h2>The Psychology of Money</h2>
            <span>Morgan Housel</span>
          </div>
        </div>

        <div className="card">
          <div className="img-box">
            <img src={OOPS} alt="OOPs" loading="lazy" decoding="async" />
          </div>
          <div className="text-box">
            <h2>Object Oriented</h2>
            <span>Matt Weisfeld</span>
          </div>
        </div>

        <div className="card">
          <div className="img-box">
            <img
              src={Spring}
              alt="Spring book"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="text-box">
            <h2>Spring In Action</h2>
            <span>Manning</span>
          </div>
        </div>

        <div className="card">
          <div className="img-box">
            <img
              src={Programmer}
              alt="Programmer Book"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="text-box">
            <h2>The Pragmatic Programmer</h2>
            <span>Person</span>
          </div>
        </div>

        <div className="card">
          <div className="img-box">
            <img
              src={Refactor}
              alt="Refactor Book"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="text-box">
            <h2>Refactoring</h2>
            <span>Kent Beck</span>
          </div>
        </div>
      </div>
      <div className="book-scroll">
        <div className="book-recommend">
          <div className="book-container">
            <img src={Money} alt="Money" loading="lazy" decoding="async" />
            <button className="read-book">Read Book</button>
          </div>
        </div>

        <div className="book-recommend">
          <div className="book-container">
            <img src={OOPS} alt="OOPs" loading="lazy" decoding="async" />
            <button className="read-book">Read Book</button>
          </div>
        </div>

        <div className="book-recommend">
          <div className="book-container">
            <img
              src={Spring}
              alt="Spring book"
              loading="lazy"
              decoding="async"
            />
            <button className="read-book">Read Book</button>
          </div>
        </div>

        <div className="book-recommend">
          <div className="book-container">
            <img
              src={Programmer}
              alt="Programmer Book"
              loading="lazy"
              decoding="async"
            />
            <button className="read-book">Read Book</button>
          </div>
        </div>

        <div className="book-recommend">
          <div className="book-container">
            <img
              src={Refactor}
              alt="Refactor Book"
              loading="lazy"
              decoding="async"
            />
            <button className="read-book">Read Book</button>
          </div>
        </div>
      </div>

      <div>
        <Hero />
        <Gitashlok />
      </div>

      <Footer />
      <Bottombar />
    </>
  );
};

export default Home;
