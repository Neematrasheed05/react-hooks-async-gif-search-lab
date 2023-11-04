import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch'

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
 // const apiKey = 'IFKPvzStIAE23Re2qEQ8X8ozW8GjtiJK';
  //const searchQuery = 'dolphin';
  //const rating = 'g';

  useEffect(() => {
    fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=IFKPvzStIAE23Re2qEQ8X8ozW8GjtiJK&rating=g")
      .then((response) => response.json())
      .then((data) => {
        console.log('Data from Giphy API:', data);
        const actualImage = data.data.map((gifData) => {
          return gifData.images.original.url;
        });
        console.log(actualImage);
        setGifs(actualImage);
      })
      .catch((error) => console.error('Error fetching data from Giphy:', error));
  }, []);

  return (
    <div>
     <GifSearch />
     <GifList gifs = {gifs}/>
    </div>
  );
};

export default GifListContainer;
