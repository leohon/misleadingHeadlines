const Form = function(props) {
  const showResult = function(headline) {
    const section = document.querySelector(".result");
    section.style.display = "block";

    let headlineCount = 0;
    
    // Create an img & p element in the result section.
    // Input image & text using innerHTML then append to section.
    // Eliminates first initalization of 'section' which is null.
    if (section !== null && headlineCount < 1) {
      const pElement = document.createElement("p");
      pElement.classList.add("headline");
      pElement.innerHTML = headline.join(" ");
      section.appendChild(pElement);
      headlineCount++;
    }
  }

  const madlib = function(e) {
    e.preventDefault();

    const form = document.querySelector("form");
    const noun = document.getElementById("noun");
    const verb = document.getElementById("verb");
    const adj = document.getElementById("adj");
    let nounNum = 0, verbNum = 0, adjNum = 0; 

    // NN = noun, VB = verb, JJ = adjective
    for (let i = 0; i < props.tags.length; i++) {
      if (props.tags[i] === "NN" && nounNum < 1) {
        nounNum++;
        props.text[i] = noun.value;
      }
      else if (props.tags[i] === "VB" && verbNum < 1) {
        verbNum++;
        props.text[i] = verb.value;
      }
      else if (props.tags[i] === "JJ" && adjNum < 1) {
        adjNum++;
        props.text[i] = adj.value;
      }
    }

    showResult(props.text);
    form.reset();
  }

  return (
    <>
      {/* Form for madlib concept */}
      <form onSubmit={madlib} className="form">
        <h3>Give me a . . .</h3>

        <div className="containLI">
          <label htmlFor="noun">Noun: </label>
          <input type="text" className="noun" id="noun" required/>
        </div>

        <div className="containLI">
          <label htmlFor="verb">Verb: </label>
          <input type="text" className="verb" id="verb" required/>
        </div>

        <div className="containLI">
          <label htmlFor="adj">Adjective: </label>
          <input type="text" className="adj" id="adj" required/>
        </div>
        
        <div className="buttonContainer">
          <button className="submit">Submit</button>
        </div>
      </form>
    
      {/* Result section where finished product is displayed */}
      <div className="result"></div>
    </>
  )
}

export default Form;