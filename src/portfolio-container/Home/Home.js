import React from "react";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";

function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
      <Footer />
      <div className="icon">
        <a
          href="https://web.facebook.com/princemanoti"
          className="facebook"
        >
          <i className="fa fa-facebook-f"></i> Facebook{" "}
        </a>
        <a href="https://www.instagram.com/prince_manoti" className="twitter">
          {" "}
          <i className="fa fa-instagram"></i> Instagram{" "}
        </a>
      </div>
    </div>
  );
}

export default Home;
