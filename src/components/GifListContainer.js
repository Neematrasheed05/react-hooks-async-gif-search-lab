import React, { useState, useEffect } from 'react';
import GifSearch from './GifSearch'

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("dolphin");
 // const apiKey = 'IFKPvzStIAE23Re2qEQ8X8ozW8GjtiJK';
  //const searchQuery = 'dolphin';
  //const rating = 'g';

  useEffect(() => {
    fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=IFKPvzStIAE23Re2qEQ8X8ozW8GjtiJK&rating=g")
      .then((response) => response.json())
      .then((data) => {
        console.log('Data from Giphy API:', data);
        const slicedGifs = data.data.slice(0, 3);
        const actualImage = slicedGifs.map((gifData) => {
          return gifData.images.original.url;
        });
        console.log(actualImage);
        setGifs(actualImage);
      })
      .catch((error) => console.error('Error fetching data from Giphy:', error));
  }, [query]);

  const handleSearch = (searchQuery) => {
    // Update the query state when the user submits the search form
    setQuery(searchQuery);
  };


  return (
    

    <div>
      <GifSearch handleSubmit={handleSearch}/>

      <div>{gifs.map((gif) => (
      
        <div key={gif.id}>
          <img src={gif} alt='gif album'/>
        </div>
        
      ))}</div>
     
    </div>
  );
};

export default GifListContainer;
