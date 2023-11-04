import React from "react";

function GifList({ gifs }) {
  return (
    <div>
      <ul>
        {gifs && gifs.map((gif) => (
          <li key={gif.id}>
            {gif.images && gif.images.downsized_medium && gif.images.downsized_medium.url ? (
              <img src={gif.images.downsized_medium.url} alt={gif.title} />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GifList;
