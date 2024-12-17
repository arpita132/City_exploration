import React from 'react';
import '../../css/HomePage.css';
import {FaMapMarkerAlt} from 'react-icons/fa';
 // Optional: import a CSS file for styling

function HomePage() {
  return (
    <div className="home-page" 
      style={{
      padding:"20px",
      textAlign:"center",
      backgroundColor:"#f9f9f9",
      borderRadius:"8px",
      boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"
      }}>
      <h1 style={{color:"#333"}}>Welcome to the City Exploration Guide!</h1>
      <p style={{color:"#666",fontSize:"1.2rem"}}>
        Discover the best places to visit, eat, and explore in your city.
        Our guide provides you with all the information you need to make
        the most of your urban adventures.
      </p>

     <div className="book-appointment-input-box">
                            <FaMapMarkerAlt className="book-appointment-icon-location" />
                            <input
                                type="text"
                                className="book-appointment-input-field"
                                // value={location ? `${location.city}, ${location.state}` : ''}
                                // onChange={handleLocationChange}
                                placeholder="Your location"
                            />
                        </div>
      <h2>Featured Destinations</h2>
      <ul >
        <li>City Park</li>
        <li>Museum of Art</li>
        <li>Central Market</li>
      </ul>
    </div>
  );
}

export default HomePage;
