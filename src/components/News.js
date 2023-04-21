import { useState } from "react";
import Form from "./Form";

const News = function() {
  // useStates to store and pass alt text (as an array) and the Part-Of-Speech tags
  const [text, settext] = useState([]);
  const [tags, setTags] = useState([]);

  const callAPITwo = function() {
    // Grab the alt text and place sentence into an array of words
    const image = document.querySelector(".newsGallery img")
    const array = image.alt.split(' ');
    settext(array);
    
    // Second API
    // https://npm.io/package/en-pos
    const Tag = require("en-pos").Tag;
    var tags = new Tag(array).initial().smooth().tags;
    setTags(tags);
  }

  const createForm = function() {
    //Form popup
    const form = document.querySelector("form");
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
          text={text}
        />
      </div>
    </section>
  )
}

export default News;