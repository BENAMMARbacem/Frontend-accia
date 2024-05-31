import ReturnButton from "components/ReturnButton";
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/">Postspage</Link>
        </li>
        <li>
          <Link to="/home1">Home1</Link>
        </li>

        <li>
          <Link to="/library">Library</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/membership">Membership</Link>
        </li>
        <li>
          <Link to="/eventspage">EventsPage</Link>
        </li>


        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/singlepostpage">SinglePostPage</Link>
        </li>
        <li>
          <Link to="/singleeventpage">SingleEventPage</Link>
        </li>
        <li>
          <Link to="/contact">Conatct</Link>
        </li>
        <li>
          <Link to="/regles">Regles</Link>
        </li>
        <li>
          <Link to="/rapportpage">Rapportpage</Link>
        </li>



      </ul>
      <ReturnButton/>
    </div>
  );
};
export default Home;
