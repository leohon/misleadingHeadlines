const Reset = function() {
  const reset = function() {
    const form = document.querySelector("form");
    const result = document.querySelector(".result");
    const reset = document.querySelector(".reset");
    const imgContainer = document.getElementsByClassName("imgContainer")

    form.style.display = "none";
    result.style.display = "none";
    reset.style.display = "none";
    for (let i = 0; i < imgContainer.length; i++) {
      imgContainer[i].innerHTML = "";
    }
  }

  return (
    <div className="buttonContainer">
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  )
}

export default Reset;