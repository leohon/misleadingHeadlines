const FirstAPI = function() {
  // Display the images
  const display = function(images) {
   const imgContainer = document.getElementsByClassName("imgContainer");
    
   //loop through the different images, store the image and title as src and alt respectively. 
   // ***If img src = null???
    for (let i = 0; i < imgContainer.length; i++) {
      imgContainer[i].innerHTML = "";
      const imgElement = document.createElement("img");
      // imgElement.setAttribute('id', "img" + i);
      imgElement.src = images.data[i].image;
      //imgElement.alt = images.data[i].title;
      imgContainer[i].appendChild(imgElement);
    }
  }

  // Call the API
  const callAPI = async function(url) {
    const obj = await fetch(url);
    const images = await obj.json();
    console.log(images)
    display(images);
  }

  // Construct the endpoint
  const endpoint = function() {
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
    //The Generate button that calls the News API for 3 photos
    <div className="buttonContainer">
      <button className="generate" id="generate" onClick={endpoint}>Generate</button>
    </div>
  )
}

export default FirstAPI;