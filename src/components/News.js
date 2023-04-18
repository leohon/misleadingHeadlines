import Form from "./Form";

const News = () => {
  //Form popup
  function click() {
    const form = document.querySelector(".form");
    
    // TODO: remove if statements, just need popup
    if (form.style.display === "none") {
      form.style.display = "block";
    }
    else {
      form.style.display = "none";
    }
  }

  return (
    <section className="newsGallery">
      <div className="wrapper">
        <div className="imgContainer" onClick={click}></div>
        <div className="imgContainer" onClick={click}></div>
        <div className="imgContainer" onClick={click}></div>

        {/* Temp placeholder for testing without wasting API calls */}
        <div className="imgContainer" onClick={click}>
          <img src="https://placekitten.com/200/200" alt="" />
        </div>

        <Form />
      </div>
    </section>
  )
}

export default News;