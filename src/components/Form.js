const Form = function(props) {
  const madlib = function() {    
    const noun = document.querySelector("#noun");
    const verb = document.querySelector("#verb");
    const adj = document.querySelector("#adj");
    let nounNum = 0, verbNum = 0, adjNum = 0; // NN, VB, JJ
    
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

    console.log(props.POS);
  }

  return (
    <form onSubmit={madlib} className="form">
      <h3>Give me a . . .</h3>

      <label htmlFor="noun">Noun: </label>
      <input type="text" className="noun" id="noun" required/>
      
      <label htmlFor="verb">Verb: </label>
      <input type="text" className="verb" id="verb" required/>
      
      <label htmlFor="adj">Adjective: </label>
      <input type="text" className="adj" id="adj" required/>

      <button>Submit</button>
    </form>    
  )
}

export default Form;