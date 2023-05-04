import { useState } from "react";
import Form from "./Form";

const News = function() {
  // useStates to store and pass image src, alt text (as an array), and the Part-Of-Speech tags
  const [photo, setPhoto] = useState("");
  const [text, setText] = useState([]);
  const [tags, setTags] = useState([]);

  const callAPITwo = function() {
    // Grab the alt text and place sentence into an array of words. Grab image source as well.
    const image = document.querySelector(".newsGallery img")
    const array = image.alt.split(' ');
    const source = image.src;

    // Second API
    // https://npm.io/package/en-pos
    const Tag = require("en-pos").Tag;
    var tags = new Tag(array).initial().smooth().tags;

    setPhoto(source);
    setText(array);
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
        <div className="gallery">
          <div className="imgContainer" onClick={createForm}></div>
          <div className="imgContainer" onClick={createForm}></div>
          <div className="imgContainer" onClick={createForm}></div>
        </div>
        {/* Temp placeholder for testing without wasting API calls */}
        {/* <div className="gallery">
          <div className="imgContainer" onClick={createForm}>
            <img src="https://placekitten.com/200/200" alt="Keep the big box on the table." />
          </div>
          <div className="imgContainer" onClick={createForm}>
            <img src="https://placekitten.com/200/200" alt="Keep the big box on the table." />
          </div>
          <div className="imgContainer" onClick={createForm}>
            <img src="https://placekitten.com/200/200" alt="Keep the big box on the table." />
          </div>
        </div> */}

        <Form 
          tags={tags}
          text={text}
          photo={photo}
        />
      </div>
    </section>
  )
}

export default News;