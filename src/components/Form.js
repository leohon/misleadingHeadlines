const Form = function(props) {
  function create() {    
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
    <form action="#" method="#" className="form">
      <h3>Give me a . . .</h3>

      <label htmlFor="noun">Noun: </label>
      <input type="text" className="noun" id="noun"/>
      
      <label htmlFor="verb">Verb: </label>
      <input type="text" className="verb" id="verb"/>
      
      <label htmlFor="adj">Adjective: </label>
      <input type="text" className="adj" id="adj"/>

      <button type="submit" onClick={create}>Submit</button>
    </form>    
  )
}

export default Form;