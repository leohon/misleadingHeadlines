import Reset from "./Reset";

const Form = function(props) {
  const showResult = function(headline) {
    const result = document.querySelector(".result");
    const reset = document.querySelector(".reset");

    result.style.display = "block";
    reset.style.display = "block";
    
    // Eliminates first initalization of 'section' which is null.
    if (result !== null) {
      // Create an img & p element (add classname) in the result section.
      const imgElement = document.createElement("img");
      const pElement = document.createElement("p");
      pElement.classList.add("headline");
      
      // Clear section then input image & text using src & innerHTML
      result.innerHTML = "";
      imgElement.src = props.photo;
      pElement.innerHTML = headline.join(" ");

      // Append to section.
      result.appendChild(imgElement);
      result.appendChild(pElement);
    }
  }

  const madlib = function(e) {
    e.preventDefault();

    const form = document.querySelector("form");
    const noun = document.getElementById("noun");
    const verb = document.getElementById("verb");
    const adj = document.getElementById("adj");
    let nounNum = 0, verbNum = 0, adjNum = 0; //Counter for 1 noun, 1 verb, 1 adjective

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
    <section className="MLform">
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

      <div className="break two"></div>
    
      {/* Result section where finished product is displayed */}
      <div className="result"></div>

      {/* Reset button */}
      <Reset />
    </section>
  )
}

export default Form;