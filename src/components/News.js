import { useState } from "react";
import Form from "./Form";

const News = function() {
  // useStates to store and pass image src, alt text (as an array), and the Part-Of-Speech tags
  const [photo, setPhoto] = useState("");
  const [text, setText] = useState([]);
  const [tags, setTags] = useState([]);

  const callAPITwo = function(target) {
    // Grab the alt text and place sentence into an array of words. Grab image source as well.
    const source = target.src;
    const array = target.alt.split(' ');
    
    // Second API
    // https://npm.io/package/en-pos
    const Tag = require("en-pos").Tag;
    var tags = new Tag(array).initial().smooth().tags;
    
    setPhoto(source);
    setText(array);
    setTags(tags);
  }
    
  const createForm = function(event) {
    //Form & line separator popup
    document.querySelector('form').style.display = "block";
    document.querySelector('.break.two').style.display = "block";
    
    callAPITwo(event.target);
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
          <div className="imgContainer" id="imgOne" onClick={createForm}>
            <img src="https://placekitten.com/200/200" alt="Keep the big box on the table." />
          </div>
          <div className="imgContainer two" onClick={createForm}>
            <img src="https://placekitten.com/300/300" alt="My mother's feeling better." />
          </div>
          <div className="imgContainer three" onClick={createForm}>
            <img src="https://placekitten.com/400/400" alt="You shouldn't be angry." />
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