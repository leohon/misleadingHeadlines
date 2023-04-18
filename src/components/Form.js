const Form = () => {
  return (
    <form action="#" method="#" className="form">
      <h3>Give me a ...</h3>

      <label htmlFor="noun">Noun: </label>
      <input type="text" className="noun" id="noun"/>
      
      <label htmlFor="verb">Verb: </label>
      <input type="text" className="verb" id="verb"/>
      
      <label htmlFor="adj">Adjective: </label>
      <input type="text" className="adj" id="adj"/>

      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;