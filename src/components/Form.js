const Form = function(props) {
  const showResult = function(headline) {
    const section = document.querySelector(".result");
    section.style.display = "block";

    let headlineCount = 0;
    
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
        props.POS[i] = noun.value;
      }
      else if (props.tags[i] === "VB" && verbNum < 1) {
        verbNum++;
        props.POS[i] = verb.value;
      }
      else if (props.tags[i] === "JJ" && adjNum < 1) {
        adjNum++;
        props.POS[i] = adj.value;
      }
    }
    
    showResult(props.POS);
    form.reset();
  }

  return (
    <>
      <form onSubmit={madlib} className="form">
        <h3>Give me a . . .</h3>

        <label htmlFor="noun">Noun: </label>
        <input type="text" className="noun" id="noun" required/>
        
        <label htmlFor="verb">Verb: </label>
        <input type="text" className="verb" id="verb" required/>
        
        <label htmlFor="adj">Adjective: </label>
        <input type="text" className="adj" id="adj" required/>

        <button className="submit">Submit</button>
      </form>
    
      <div className="result"></div>
    </>
  )
}

export default Form;