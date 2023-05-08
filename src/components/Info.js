import FirstAPI from "./FirstAPI";

const Info = function() {
  return (
    // Instructions on how to use the app
    <section className="instructions">
      <div className="wrapper">
        <h2>Instructions</h2>
        <ol>
          <li>Click on the 'Generate' button to get started.</li>
          <li>Select 1 of 3 news article photos that appear.</li>
          <li>Complete the form that appears.</li>
          <li>Your creation will be displayed upon submission.</li>
        </ol>

        {/* Where the code for the first API call is */}
        <FirstAPI />

        <div className="break one"></div>
      </div>
    </section>
  )
}

export default Info;