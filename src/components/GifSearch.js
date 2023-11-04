import React, {useState} from "react";

function GifSearch({searchGifs}){
    const [query, setQuery] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        searchGifs(query);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={(event) => setQuery(event.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
export default GifSearch;