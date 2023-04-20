import { useState } from "react";
import Form from "./Form";

const News = function() {
  const [POS, setPOS] = useState([]);
  const [tags, setTags] = useState([]);

  const callAPITwo = function() {
    // Grab the alt text and place sentence into an array of words
    const test = document.querySelector(".newsGallery img")
    const arr = test.alt.split(' ');
    setPOS(arr);
    
    // Second API
    // https://npm.io/package/en-pos
    const Tag = require("en-pos").Tag;
    var tags = new Tag(arr).initial().smooth().tags;
    setTags(tags);
  }

  const createForm = function() {
    //Form popup
    const form = document.querySelector(".form");
    form.style.display = "block";

    callAPITwo();
  }

  return (
    <section className="newsGallery">
      <div className="wrapper">
        {/* May need to add parameter to createForm function */}
        <div className="imgContainer" onClick={createForm}></div>
        <div className="imgContainer" onClick={createForm}></div>
        <div className="imgContainer" onClick={createForm}></div>

        {/* Temp placeholder for testing without wasting API calls */}
        <div className="imgContainer" onClick={createForm}>
          <img src="https://placekitten.com/200/200" alt="Keep the big box on the table." />
        </div>

        <Form 
          tags={tags}
          POS={POS}
        />
      </div>
    </section>
  )
}

export default News;