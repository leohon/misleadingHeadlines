const FirstAPI = function() {
  // Display the images
  function display(images) {
    const imgContainer = document.querySelector(".imgContainer");
    imgContainer.innerHTML = " ";
    
    //loop through for different images. 
    // ***If img src = null???
    for (let i = 0; i < images.data.length; i++) {
      const imgElement = document.createElement("img");
      //add a className
      imgElement.src = images.data[i].image;
      //imgElement.alt = images.data[i].title;
      imgContainer.appendChild(imgElement);
    }
  }

  // Call the API
  async function callAPI(url) {
    const obj = await fetch(url);
    const images = await obj.json();
    console.log(images)
    display(images);
  }

  // Construct the endpoint
  function endpoint() {
    const apiKey = '0fa169ec9d099a5466a62a98dc6fdfa2';
    const url = new URL("http://api.mediastack.com/v1/news");
    const canada = "ca";
    let date = new Date().toJSON().slice(0,10);
    // const sort = "popularity";
    
    // Add dropdown for more variety? Doesn't really refresh well.
    // Option: limit - 1, offset - Math.floor(Math.random() * 100), date - date but with true/false value
    url.search = new URLSearchParams({
      access_key: apiKey,
      countries: canada,
      // date: date, //change to dates
      limit: 3
    })

    callAPI(url);
  }
  
  return (
    <button className="generate" id="generate" onClick={endpoint}>Generate</button>
  )
}

export default FirstAPI;