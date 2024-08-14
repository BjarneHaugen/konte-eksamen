import React from "react";
import { useState, useEffect } from "react";

export const FrontPage = () => {
  const [listings, setListings] = useState([]);

  const fetchListings = async () => {
    try {
      const response = await fetch("/api/test", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setListings(data);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <div>
      <h1>Nyheter</h1>
      {listings.length > 0 ? (
        listings.map((listing, index) => (
          <div key={listing.id || index}>
            <h2>{listing.headline}</h2>
            <p>{listing.text}</p>
            <p>Author: {listing.user}</p>
          </div>
        ))
      ) : (
        <p>No listings available</p>
      )}
    </div>
  );
};
